import React, { Children, ReactNode } from "react";
import { ButtonStyles } from "../../common/styles";

type ButtonProps = {
  text: string;
  className?: string;
  children?: ReactNode;
  variant?: "container" | "outline" | "text";
  action?: () => {};
};

export const Button = ({
  text,
  className,
  children,
  variant = "container",
}: ButtonProps) => {
  const styles = new ButtonStyles(variant).getButtonStyle();
  return (
    <button className={`${className} ${styles}`}>
      {children}
      <span>{text}</span>
    </button>
  );
};
