/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Select, { StylesConfig } from "react-select";
import { forwardRef, useId } from "react";

export interface ISelect {
    label: string;
    value: any;
  }

const SelectBox = forwardRef((props: any, ref) => {
  const customStyles: StylesConfig = {
    option: (provided: any, { isSelected }) => ({
      ...provided,
      backgroundColor: isSelected ? "#343434" : "#2b2b2b",
      margin: 0,
      zIndex: 10,
      position: "relative",
      cursor: "pointer",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#6950FF",
      },
      "&:active": {
        backgroundColor: "#6950FF",
      },
    }),
    control: (provided: any, { isDisabled }) => ({
      ...provided,
      borderColor: "#dedede",
      backgroundColor: isDisabled ? "#343434" : "#2B2B2B",
      borderRadius: 8,
      padding: "calc(0.75rem - 5px) 1.25rem",
      color: "#fff",
      border: "1px solid rgb(64, 64, 64)",
      "&:hover": {
        color: "#fff",
      },
      "&:disabled": {
        backgroundColor: "#343434",
      },
    }),
    input: (provided: any) => ({
      ...provided,
      borderRadius: 5,
      color: "#fff",
      padding: 0,
      margin: 0,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      padding: 0,
      color: "#fff",
      margin: 0,
    }),
    placeholder: (provided: any) => ({
      ...provided,
      margin: 0,
      color: "#f4f4f4",
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
        placeholder=""
      />
      {props.error && (
        <div className="text-left text-sm mt-1 text-red-500">
          {props.error.message}
        </div>
      )}
    </div>
  );
});

export default SelectBox;
