import { IFormtypes } from "@/app/payment/PaymentSection";
import React from "react";
import { Control, useController } from "react-hook-form";

type Props = {
  control: Control<IFormtypes, any>;
};

const FileInput = ({ control }: Props) => {
  const {
    field: { onChange,value, ...field },
  } = useController({
    name: "file",
    control,
    rules: { required: true },
  });
  return (
    <>
      <input
        type="file"
        className="sr-only"
        id="file"
        accept="image/*"
        {...field}
        onChange={(event) => {
          if (event.target.files?.length) {
            onChange(event.target.files[0]);
          }
        }}
      />
    </>
  );
};

export default FileInput;
