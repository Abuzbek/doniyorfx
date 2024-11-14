import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import PaymentCard from "../PaymentCard";
import PlanCard from "../PlanCard";
import styles from "../payment.module.scss";
import classNames from "classnames";
import { Montserrat } from "next/font/google";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TelegramQuestionCard from "../TelegramQuestionCard";
import { PaymentService } from "@/app/service/payment.service";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import CheckIcon from "./CheckIcon";
import ErrorIcon from "./ErrorIcon";
import FileIcon from "./FileIcon";
import { IFormTypesWithId } from "../page";
import CreditCard from "../CreditCard";

type Props = {
  userData: IFormTypesWithId;
};
const montserrat = Montserrat({ subsets: ["latin"] });
export interface IFormtypes {
  agree: boolean;
  file: any;
}
const PaymentSection = ({ userData }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const plans = [
    {
      title: "Standart tarif",
      price: "3 797 000 so‘m",
      price_dollar: "294.5$",
      value: 1,
    },
    {
      title: "Premium tarif",
      price: "3 997 000 so‘m",
      price_dollar: "310$",
      value: 2,
    },
    {
      title: "VIP tarif",
      price: "7 997 000 so‘m",
      price_dollar: "620$",
      value: 3,
    },
    {
      title: "VIP tarif",
      price: "19 339 000 so‘m",
      price_dollar: "1500$",
      value: 4,
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
  } = useForm<IFormtypes>({ defaultValues: { agree: true } });

  const onSubmit: SubmitHandler<IFormtypes> = async (data) => {
    setLoading(true);
    const formData = new FormData();
    // const userData = JSON.parse(searchParams.get("user") || "");
    formData.append("file", data.file);
    // formData.append("name", userData.name);
    // formData.append("surname", userData.surname);
    // formData.append("plan", String(userData.plan));
    // formData.append("phone", userData.phone);
    // formData.append("course", "1");
    const response = await PaymentService.updatePayment(userData._id, formData);
    if (response.status === 200) {
      setLoading(false);
      router.push(
        pathname +
          "?" +
          createQueryString("user", JSON.stringify(userData)) +
          "&finish=" +
          String(true)
      );
    }
  };

  const paymeLink = useMemo(() => {
    const href =
      "https://payme.uz/fallback/merchant/?id=654b87cfcbc3052122211939" +
      "&" +
      createQueryString("name", userData.name) +
      "&" +
      createQueryString("familiya", userData.surname) +
      "&" +
      createQueryString("tarif", String(userData?.plan)) +
      "&" +
      createQueryString("phone", userData?.phone) +
      "&" +
      createQueryString("cource", "1");
    return href;
  }, [searchParams, userData]);

  const uzumLink = useMemo(() => {
    const href =
      "https://www.apelsin.uz/open-service?serviceId=498612103" +
      "&" +
      createQueryString("name", userData.name) +
      "&" +
      createQueryString("familiya", userData.surname) +
      "&" +
      createQueryString("tarif", String(userData?.plan)) +
      "&" +
      createQueryString("phone", userData?.phone) +
      "&" +
      createQueryString("cource", "1");
    return href;
  }, [searchParams, userData]);

  const clickLink = useMemo(() => {
    const href =
      "https://my.click.uz/services/pay?service_id=30466&merchant_id=22925" +
      "&" +
      createQueryString("name", userData.name) +
      "&" +
      createQueryString("familiya", userData.surname) +
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
      {isLoading && (
        <div className="top-0 left-0 fixed w-full h-full z-50 bg-black opacity-50 flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-20 w-20 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
      <PaymentCard>
        {!!currentPlan && <PlanCard {...currentPlan} />}
      </PaymentCard>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classNames(montserrat.className, styles.plan_section)}
      >
        <p>1. To'lov tizimlari orqali to’lovni amalga oshiring</p>
        {/* <div className="grid sm:grid-cols-2 gap-2">
          <a href={paymeLink} target="_blank" className={styles.payme_link}>
            <img className="w-16" src="/img/payme.png" alt="" />
            <span>To‘lovga o‘tish</span>
          </a>
          <a href={uzumLink} target="_blank" className={styles.uzum_link}>
            <img className="w-16" src="/img/uzum.png" alt="" />
            <span>To‘lovga o‘tish</span>
          </a>
          <a href={clickLink} target="_blank" className={classNames(styles.uzum_link, 'col-span-2')} style={{
            background: '#00a6ff'
          }}>
            <img className="w-16" src="/img/click.png" alt="" />
            <span>To‘lovga o‘tish</span>
          </a>
        </div> */}
        <CreditCard
          price={currentPlan?.price}
          price_dollar={currentPlan?.price_dollar}
        />
        {/* <Controller
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
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#6E4EFF] checked:bg-[#6E4EFF] checked:before:bg-[#6E4EFF] hover:before:opacity-10"
                      id="checkbox"
                      defaultChecked={value}
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
                    <a href="/img/oferta-online-edu.docx" target="_blank">
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
        /> */}
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
          className={classNames(
            styles.submit_button,
            !isDirty || !isValid ? "opacity-50" : ""
          )}
          // disabled={}
        >
          To‘lovni yakunlash
        </button>
        <TelegramQuestionCard />
      </form>
    </div>
  );
};

export default PaymentSection;
