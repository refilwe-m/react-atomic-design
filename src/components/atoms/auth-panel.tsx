import React, { Children } from "react";

import { AuthPanelProps } from "./types";

export const AuthPanel = ({ children }: AuthPanelProps) => {
  return (
    <section className="auth-panel bg-[#060606] rounded-sm">{children}</section>
  );
};
