/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Select, { StylesConfig } from "react-select";
import { forwardRef, useContext, useId } from "react";
import ErrorIcon from "@/app/payment/PaymentSection/ErrorIcon";
import { useAppContext } from "@/app/context/AppContext";

export interface ISelect {
  label: string;
  value: any;
}

const SelectBox = forwardRef((props: any, ref) => {
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  const customStyles: StylesConfig = {
    option: (provided: any, { isSelected }) => ({
      ...provided,
      backgroundColor:
        isDark && isSelected
          ? "#343434"
          : isDark
          ? "#2b2b2b"
          : isSelected
          ? "#6950FF"
          : "#f4f4f4",
      margin: 0,
      zIndex: 10,
      position: "relative",
      cursor: "pointer",
      color:
        isDark && isSelected
          ? "#fff"
          : isDark
          ? "#fff"
          : isSelected
          ? "#fff"
          : "#000",
      "&:hover": {
        backgroundColor: "#6950FF",
        color: "#fff",
      },
      "&:active": {
        backgroundColor: "#6950FF",
        color: "#fff",
      },
    }),
    control: (provided: any, { isDisabled }) => ({
      ...provided,
      borderColor: "#dedede",
      backgroundColor:
        isDark && isDisabled
          ? "#343434"
          : isDark
          ? "#2B2B2B"
          : isDisabled
          ? "#eee"
          : "#fff",
      borderRadius: 8,
      padding: "calc(0.75rem - 5px) 1.25rem",
      color: isDark ? "#fff" : "#000",
      border: isDark ? "1px solid rgb(64, 64, 64)" : "1px solid #ccc",
    }),
    input: (provided: any) => ({
      ...provided,
      borderRadius: 5,
      color: isDark ? "#fff" : "#000",
      padding: 0,
      margin: 0,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      padding: 0,
      color: isDark ? "#fff" : "#000",
      margin: 0,
    }),
    placeholder: (provided: any) => ({
      ...provided,
      margin: 0,
      color: isDark ? "#f4f4f4" : "#B4B0AF",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      zIndex: 10,
      margin: 0,
      padding: 0,
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    // indicatorsContainer: (base) => ({
    //   ...base,
    //   ":last-child": {
    //     padding: 0,
    //   },
    // }),
    dropdownIndicator(base) {
      if (props.miniIndicator) {
        return {
          ...base,
          // padding: 0,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 5,
          paddingBottom: 5,
        };
      } else {
        return base;
      }
    },
    menuList: (provided: any) => ({
      ...provided,
      backgroundColor: "#fff",
      padding: 0,
    }),
  };

  return (
    <div className="relative z-10 flex flex-col justify-between gap-1 h-full">
      {props.label && (
        <label className="block text-left text-[rgb(119,116,150)] dark:text-white">
          {props.label}
        </label>
      )}
      <Select
        instanceId={useId()}
        ref={ref}
        {...props}
        value={props.value}
        styles={customStyles}
        isDisabled={props.disabled}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
        })}
      />
      {props.error && (
        <div className="text-[#EE404C] flex items-center gap-1 sm:text-sm text-xs font-medium mt-1">
          <ErrorIcon />
          {props.error.message}
        </div>
      )}
    </div>
  );
});

export default SelectBox;
