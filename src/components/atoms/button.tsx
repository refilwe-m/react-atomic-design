import React from "react";

import { ButtonProps } from "./types";

export const Button = ({
  text,
  className,
  children,
  variant = "container",
  func = "edit",
}: ButtonProps) => {
  let btnStyles: string = "";

  switch (variant) {
    case "container":
      btnStyles =
        "bg-green-600 rounded-md text-white inline-block text-xs font-medium self-center px-6 py-2";
      break;
    case "outline":
      btnStyles =
        func == "delete"
          ? "border-red-600 p-2 inline-block rounded-md border text-red-600"
          : "bg-indigo-500 inline-block rounded-md text-white px-6 py-2";
      break;
    case "text":
      btnStyles =
        "inline-block px-6 py-2 font-medium text-sm leading-tight text-white";
      break;
    default:
      btnStyles =
        "bg-green-600 rounded-md text-white inline-block text-xs font-medium self-center px-6 py-2";
  }

  return (
    <button
      className={`flex gap-2 items-center ${className || ""} ${btnStyles}`}
    >
      {children && (
        <span className="text-white" id="icon">
          {children}
        </span>
      )}
      <span>{text}</span>
    </button>
  );
};
