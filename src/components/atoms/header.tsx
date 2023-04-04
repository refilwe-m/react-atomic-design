import React from "react";

type HeaderProps = {
  title: string;
  className: string;
};
export const Header = ({ title, className }: HeaderProps) => {
  return <h1 className={className}>{title}</h1>;
};
