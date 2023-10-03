import React, { ReactNode } from "react";
import { Breadcrumb } from "@project/components";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Breadcrumb />
      <section className="w-screen h-screen flex justify-center items-center">
        {children}
      </section>
    </>
  );
};
