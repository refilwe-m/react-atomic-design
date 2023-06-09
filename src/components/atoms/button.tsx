import React from "react";

import { ButtonProps } from "./types";

export const Button = ({
  text,
  className,
  icon,
  variant = "container",
  func = "edit",
  onClick,
}: ButtonProps) => {
  let btnStyles: string = "";

  switch (variant) {
    case "container":
      btnStyles =
        "bg-green-500 hover:bg-green-700 rounded-md text-white inline-block text-xs font-medium self-center px-6 py-2";
      break;
    case "outline":
      btnStyles =
        func == "delete"
          ? "border-red-600 inline-block rounded-md border text-red-600"
          : "bg-indigo-500 inline-block rounded-md text-white";
      break;
    case "text":
      btnStyles =
        "text-blue-700 hover:text-blue-500 inline-block font-medium text-sm leading-tight";
      break;
    default:
      btnStyles =
        "bg-green-500 hover:bg-green-700 rounded-md text-white inline-block text-xs font-medium self-center";
  }

  return (
    <button
      onClick={onClick}
      type="submit"
      className={`flex gap-2 justify-center items-center ${
        className || ""
      } ${btnStyles}`}
    >
      {icon && (
        <span className="text-white" id="icon">
          {icon}
        </span>
      )}
      <span>{text}</span>
    </button>
  );
};
