import React from "react";

import { ChildrenProps } from "../../common/types";

export const AppLayout = ({ children }: ChildrenProps) => {
  return <section className="w-screen h-screen pt-6 px-12">{children}</section>;
};
