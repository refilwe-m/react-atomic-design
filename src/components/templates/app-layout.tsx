import React from "react";

import { ChildrenProps } from "../../common/types";
import { Breadcrumb } from "..";

export const AppLayout = ({ children }: ChildrenProps) => {
  return (
    <section className="w-screen h-screen pt-6 px-12">
      <Breadcrumb />
      {children}
    </section>
  );
};
