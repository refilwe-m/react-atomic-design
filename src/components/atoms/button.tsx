import React, { Children, ReactNode } from "react";
import { ButtonStyles } from "../../common/styles";

type ButtonProps = {
  text: string;
  className?: string;
  children?: ReactNode;
  variant?: "container" | "outline" | "text";
  func?: "edit" | "delete" | "add";
  action?: () => {};
};

export const Button = ({
  text,
  className,
  children,
  variant = "container",
  func = "edit",
}: ButtonProps) => {
  const btnStyles = new ButtonStyles(variant);
  btnStyles.setFunctionType(func);
  const styles = btnStyles.getButtonStyle();

  return (
    <button className={`${className || ""} ${styles}`}>
      {children}
      <span>{text}</span>
    </button>
  );
};
