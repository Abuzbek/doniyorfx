import React, { ChangeEvent, useCallback, useMemo } from "react";
import PaymentCard from "../PaymentCard";
import PlanCard, { PlanCardProps } from "../PlanCard";
import styles from "../payment.module.css";
import classNames from "classnames";
import { Montserrat } from "next/font/google";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TelegramQuestionCard from "../TelegramQuestionCard";
import { PaymentService } from "@/app/service/payment.service";
import { useSearchParams } from "next/navigation";
import CheckIcon from "./CheckIcon";
import ErrorIcon from "./ErrorIcon";
import FileIcon from "./FileIcon";
import { IFormTypes } from "../page";
type Props = {
  userData: IFormTypes;
};
const montserrat = Montserrat({ subsets: ["latin"] });
export interface IFormtypes {
  agree: boolean;
  file: any;
}
const PaymentSection = ({ userData }: Props) => {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const plans = [
    {
      title: "Standart tarif",
      price: "2 797 000 so‘m",
      value: 1,
    },
    {
      title: "Premium tarif",
      price: "2 997 000 so‘m",
      value: 2,
    },
    {
      title: "VIP tarif",
      price: "5 997 000 so‘m",
      value: 3,
    },
  ];
  const currentPlan = useMemo(
    () => plans.find((n) => n.value === userData?.plan),
    [userData?.plan]
  );

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm<IFormtypes>();
  const onSubmit: SubmitHandler<IFormtypes> = async (data) => {
    const formData = new FormData();
    // const userData = JSON.parse(searchParams.get("user") || "");
    // console.log(userData);
    formData.append("file", data.file);
    formData.append("name", userData.name);
    formData.append("plan", String(userData.plan));
    formData.append("phone", userData.phone);
    formData.append("course", "1");
    const response = await PaymentService.createPayment(formData);
    console.log(response);
  };
  
  const paymeLink = useMemo(() => {
    const splittedName =
      userData?.name.split(" ").length > 1
        ? userData?.name.split(" ")[0]
        : userData?.name;
    const splittedSurename =
      userData?.name.split(" ").length > 1 ? userData?.name.split(" ")[1] : "";
    const href =
      "https://payme.uz/fallback/merchant/?id=654b87cfcbc3052122211939" +
      "&" +
      createQueryString("name", splittedName) +
      "&" +
      createQueryString("familiya", splittedSurename) +
      "&" +
      createQueryString("tarif", String(userData?.plan)) +
      "&" +
      createQueryString("phone", userData?.phone) +
      "&" +
      createQueryString("cource", "1");
    return href;
  }, [searchParams, userData]);
  return (
    <div className="flex flex-col gap-6">
      <PaymentCard>
        {!!currentPlan && <PlanCard {...currentPlan} />}
      </PaymentCard>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classNames(montserrat.className, styles.plan_section)}
      >
        <p>1. Payme yoki Uzum orqali to’lovni amalga oshiring</p>
        <div className="grid grid-cols-1 gap-2">
          <a
            href={paymeLink}
            target="_blank"
            className={styles.payme_link}
          >
            <img src="/img/payme.png" alt="" />
            <span>To‘lovga o‘tish</span>
          </a>
          {/* <a href="#!" target="_blank" className={styles.payme_link}>
            <img src="/img/payme.png" alt="" />
            <span>To‘lovga o‘tish</span>
          </a> */}
        </div>
        <Controller
          name={"agree"}
          control={control}
          rules={{
            required: "Ommaviy offertaga rozi bo'lishingiz kerak!",
          }}
          render={({ field: { value, ...field } }) => {
            return (
              <div className={styles.offerta}>
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlFor="checkbox"
                    data-ripple-dark="true"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#A388FF] checked:bg-[#A388FF] checked:before:bg-[#A388FF] hover:before:opacity-10"
                      id="checkbox"
                      checked={value}
                      {...field}
                    />
                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </label>
                  <label htmlFor="checkbox">
                    <a href="#!" target="_blank">
                      Shartnoma
                    </a>{" "}
                    shartlariga roziman
                  </label>
                </div>

                {errors.agree && (
                  <small className="text-[#EE404C] flex items-center gap-1 sm:text-sm text-xs font-medium">
                    <ErrorIcon /> {errors.agree.message}
                  </small>
                )}
              </div>
            );
          }}
        />
        <p>
          2. To‘lovingiz muvaffaqiyatli amalga oshganini tasdiqlovchi rasmni
          saqlab oling (screenshot)
        </p>
        <p>3. To‘lovingiz rasmini yuklang</p>
        <Controller
          name={"file"}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value, ...field } }) => {
            return (
              <div className="flex flex-col gap-1">
                <div className="inline-flex items-center">
                  <label
                    className={styles.upload_button}
                    htmlFor="file"
                    data-ripple-dark="true"
                  >
                    <input
                      type="file"
                      className="sr-only"
                      id="file"
                      accept="image/*"
                      {...field}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        if (event.target.files?.length) {
                          onChange(event.target.files[0]);
                        }
                      }}
                    />
                    {!!getValues("file") ? (
                      <span className="flex items-center gap-1 justify-center">
                        <FileIcon /> {getValues("file").name}
                      </span>
                    ) : (
                      <span>Chek rasmini yuklash uchun bosing</span>
                    )}
                  </label>
                </div>
                {errors.file && (
                  <small className="text-[#EE404C] flex items-center gap-1 sm:text-sm text-xs font-medium">
                    <ErrorIcon />
                    To'lovni yakunlash uchun avval chek rasmini yuklang
                  </small>
                )}
                {!!getValues("file") && (
                  <span className="text-green-500 sm:text-sm text-xs font-medium flex items-center gap-1">
                    <CheckIcon /> Rasm muvaffaqiyatli yuklandi
                  </span>
                )}
              </div>
            );
          }}
        />
        <button
          className={styles.submit_button}
          // disabled={!isDirty || !isValid}
        >
          To‘lovni yakunlash
        </button>
        <TelegramQuestionCard />
      </form>
    </div>
  );
};

export default PaymentSection;
