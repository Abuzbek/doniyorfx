"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import styles from "./payment.module.scss";
import classNames from "classnames";
import MainCard from "./MainCard";
import FormSection from "./FormSection";

import { SubmitHandler, useForm } from "react-hook-form";
import UserInfo from "./UserInfo";
import PaymentSection from "./PaymentSection";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import AppContextProvider from "../context/AppContext";
import TagManager from "react-gtm-module";
import CongratulationSection from "./CongratulationSection";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

export interface IFormTypes {
  name: string;
  surname: string;
  phone: string;
  plan: number;
}
const measurementId = "G-EGRC8JB9PG";
const Payment = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<IFormTypes>();
  const [finish, setFinish] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormTypes>();

  const onSubmit: SubmitHandler<IFormTypes> = (data) => {
    setUserData(data);
    setStep(2);
    router.push(
      pathname + "?" + createQueryString("user", JSON.stringify(data))
    );
  };

  useEffect(() => {
    if (searchParams.get("user")) {
      setStep(2);
      setUserData(JSON.parse(searchParams.get("user") || ""));
    }
    setFinish(searchParams.has("finish"));
  }, [pathname, searchParams]);

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
                  Professional <br /> Mobilografiya
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
