import React, { InputHTMLAttributes, forwardRef } from "react";
import classes from "./field.module.scss";
import classNames from "classnames";
import PhoneInput from "react-phone-number-input";
import "./phoneInput.css";
import ErrorIcon from "@/app/payment/PaymentSection/ErrorIcon";
type Props = {
  placeholder?: string;
  error?: any;
  label?: string | JSX.Element;
  limit?: number;
  name: string;
  disabled?: boolean;
  autoComplete?: string;
  inputRef?: React.Ref<HTMLInputElement> | undefined;
};

type InputPropsField = InputHTMLAttributes<HTMLInputElement> & Props;
const Field = forwardRef<HTMLInputElement, InputPropsField>(
  ({ placeholder, error, type, style, label, onChange, ...rest }, ref) => {
    const value = rest.value as any;
    const onChangeAsPhone = onChange as any;
    return (
      <div className={classNames(classes.field)} style={style}>
        {label && <label>{label}</label>}
        {type === "tel" ? (
          <PhoneInput
            className={classes.phoneInput}
            international
            defaultCountry="UZ"
            value={value}
            onChange={onChangeAsPhone}
            id="phone-input"
          />
        ) : (
          <input
            {...rest}
            value={rest.value}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
          />
        )}

        {error && <small><ErrorIcon /> {error.message}</small>}
      </div>
    );
  }
);

export default Field;
