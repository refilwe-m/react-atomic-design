import React from "react";

import { InputProps } from "../atoms/types";
import { ErrorText } from "../../components";

export const InputField = ({ placeholder, color, ...props }: InputProps) => {
  let styles = "";
  styles = props.label
    ? "bg-transparent border-2 border-gray-300"
    : "border-none";
  return (
    <section className="flex flex-col gap-2">
      {props.label && (
        <label className="text-white mb-1 pl-1" htmlFor="my-input">
          {props.label}
        </label>
      )}
      <input
        id="my-input"
        type={props.type || "text"}
        className={`text-${color} w-96 rounded-lg py-2 px-3 placeholder:text-center placeholder:font-medium ${styles}}`}
        placeholder={props.label ? "" : placeholder}
      />
      {props.hasError && <ErrorText message="Oops inavlid input" />}
    </section>
  );
};
