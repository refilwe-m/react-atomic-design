import React, { Children, ReactNode } from "react";

type ButtonProps = {
  text: string;
  className?: string;
  children?: ReactNode;
  variant?: "filled" | "outline";
  action?: () => {};
};

export const Button = ({
  text,
  className,
  children,
  variant = "filled",
}: ButtonProps) => {
  return (
    <button
      className={`${className} flex gap-2 justify-center items-center ${
        variant !== "filled" ? "border-solid bg-transparent" : ""
      }`}
    >
      {children}
      <span>{text}</span>
    </button>
  );
};
