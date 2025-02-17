"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import styles from "./payment.module.scss";
import classNames from "classnames";
import MainCard from "./MainCard";
import FormSection, { plans } from "./FormSection";

import { SubmitHandler, useForm } from "react-hook-form";
import UserInfo from "./UserInfo";
import PaymentSection from "./PaymentSection";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import AppContextProvider from "../context/AppContext";
import TagManager from "react-gtm-module";
import CongratulationSection from "./CongratulationSection";
import { PaymentService } from "../service/payment.service";
import { ISelect } from "../components/UI/SelectBox";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });
export interface IFormTypes {
  name: string;
  surname: string;
  phone: string;
  plan: number | string;
}
export interface IFormTypesWithId extends IFormTypes {
  _id: string;
}
const measurementId = "G-EGRC8JB9PG";
const Payment = () => {
  const [plan, setPlan] = useState<ISelect>();

  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<IFormTypesWithId>();
  const [finish, setFinish] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams.toString()]
  );

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
    setValue,
  } = useForm<IFormTypes>();

  const onSubmit: SubmitHandler<IFormTypes> = async (data) => {
    const response = await PaymentService.createPayment(data);
    if (response.status === 200) {
      setUserData(response.data);
      setStep(2);
      router.push(
        pathname +
          "?" +
          createQueryString("user", JSON.stringify(response.data))
      );
    }
  };

  useEffect(() => {
    if (searchParams.get("user")) {
      setStep(2);
      setUserData(JSON.parse(searchParams.get("user") || ""));
    } else {
      setStep(1);
    }
    if (searchParams.get("plan")) {
      setValue("plan", searchParams.get("plan") || "");
      setPlan(
        plans.find((n) => n.value === Number(searchParams.get("plan"))) ||
          undefined
      );
      console.log(plans.find((n) => n.value === Number(searchParams.get("plan"))));
    }
    setFinish(searchParams.has("finish"));
  }, [pathname, searchParams.toString()]);

  useEffect(() => {
    TagManager.initialize({ gtmId: measurementId });
  }, []);
  return (
    // <AppContextProvider>
    <div className={classNames(spaceGrotesk.className, styles.main)}>
      <MainCard finish={finish}>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-6">
            {userData ? (
              <>
                <a href="#" className={styles.logo}>
                  Mobilografiya va <br /> Instagram 5.0
                </a>
                <UserInfo name={userData.name} phone={userData.phone} />
              </>
            ) : null}
          </div>
          {step === 1 ? (
            <FormSection
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              errors={errors}
              control={control}
              isValid={isValid}
              isDirty={isDirty}
              plan={plan}
              setPlan={setPlan}
            />
          ) : userData && !finish ? (
            <PaymentSection userData={userData} />
          ) : userData && finish ? (
            <CongratulationSection />
          ) : null}
        </div>
      </MainCard>
    </div>
  );
};

export default Payment;
