import React, { ReactNode } from "react";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      {children}
    </section>
  );
};
