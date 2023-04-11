import React from "react";

import { PanelProps } from "./types";

export const Panel = ({ children, title, className }: PanelProps) => {
  return (
    <main
      className={`panel text-white bg-[#191a1f] drop-shadow-xl rounded sm p-3 ${
        className || ""
      }`}
    >
      <section className="panel-content">
        {title && <h1 className="text-1xl text-center pb-5">{title}</h1>}
        {children}
      </section>
    </main>
  );
};
