import React, { FC, useEffect, useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import Field from "@/app/components/UI/Field";
import SelectBox, { ISelect } from "@/app/components/UI/SelectBox";
import classNames from "classnames";
import styles from "../payment.module.scss";
import { IFormTypes } from "../page";
import { Montserrat } from "next/font/google";
import PaymentCard from "../PaymentCard";
import CourseCard from "../CourseCard";

const montserrat = Montserrat({ subsets: ["latin"] });

var regexPhone = /^\+(?:[0-9] ?){8,15}[0-9]$/;
type Props = {
  handleSubmit: UseFormHandleSubmit<IFormTypes, undefined>;
  onSubmit: SubmitHandler<IFormTypes>;
  errors: FieldErrors<IFormTypes>;
  control: Control<IFormTypes, any>;
  isValid: boolean;
  isDirty: boolean;
  setPlan: React.Dispatch<React.SetStateAction<ISelect | undefined>>;
  plan: ISelect | undefined;
};
export const plans = [
  {
    label: "Standart 2.797.000",
    value: 1,
  },
  {
    label: "Premium 2.997.000",
    value: 2,
  },
  {
    label: "VIP 5.997.000",
    value: 3,
  },
];
const FormSection = ({
  handleSubmit,
  onSubmit,
  errors,
  control,
  isValid,
  isDirty,
  plan,
  setPlan,
}: Props) => {
  const onSelect = (val: ISelect, onChange: any) => {
    onChange(val.value);
    setPlan(val);
  };
  return (
    <div className="flex flex-col gap-6">
      <PaymentCard>
        <CourseCard />
      </PaymentCard>
      {/* <p className={classNames(montserrat.className, styles.middle_text)}>
        Trenddagi kasbni katta tajribaga ega mutaxassislardan o’rganing
      </p> */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Controller
          name={"name"}
          control={control}
          rules={{
            required: "Ism bo'sh bo'lmasligi shart",
            minLength: { value: 3, message: "Ismingizni to'liq yozing" },
          }}
          render={({ field: { value, ...field } }) => {
            return (
              <Field
                {...field}
                value={value || ""}
                label="Ism"
                error={errors.name}
              />
            );
          }}
        />
        <Controller
          name={"surname"}
          control={control}
          rules={{
            required: "Familiya bo'sh bo'lmasligi shart",
            minLength: { value: 3, message: "Familiyangizni to'liq yozing" },
          }}
          render={({ field: { value, ...field } }) => {
            return (
              <Field
                {...field}
                value={value || ""}
                label="Familiya"
                error={errors.surname}
              />
            );
          }}
        />
        <Controller
          name={"phone"}
          control={control}
          rules={{
            required: "Telefon bo'sh bo'lmasligi shart",
            // minLength: { value: 6, message: "Raqamingizni to'liq yozing" },
            pattern: {
              value: regexPhone,
              message: "Raqamingizni to'g'ri yozing",
            },
          }}
          render={({ field: { value, ...field } }) => {
            return (
              <Field
                {...field}
                value={value || ""}
                type="tel"
                label="Telefon"
                error={errors.phone}
                autoComplete="off"
              />
            );
          }}
        />
        <Controller
          name={"plan"}
          control={control}
          rules={{ required: "Tarif bo'sh bo'lmasligi shart " }}
          render={({ field: { onChange, name, value, ...fields } }) => {
            return (
              <SelectBox
                {...fields}
                options={plans}
                value={plan}
                onChange={(val: ISelect) => onSelect(val, onChange)}
                label="Tarif"
                error={errors.plan}
                placeholder="Tarifni tanlang"
              />
            );
          }}
        />
        <button
          className={classNames(
            styles.submit_button,
            !isDirty || !isValid ? "opacity-50" : "",
            montserrat.className
          )}
        >
          To‘lovga o‘tish
        </button>
      </form>
    </div>
  );
};

export default FormSection;
