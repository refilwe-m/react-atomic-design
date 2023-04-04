import React from "react";
type ErrorTextProps = { message: string };
export const ErrorText = ({ message }: ErrorTextProps) => {
  return <sub className="text-red-600">{message}</sub>;
};
