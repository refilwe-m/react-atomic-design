import React from "react";

type InputProps = {
  placeholder: string;
  label: string;
  hasError: boolean;
  color: string;
};

export const InputField = ({ placeholder }: InputProps) => {
  return (
    <input type="text" placeholder={placeholder}>
      InputField
    </input>
  );
};
