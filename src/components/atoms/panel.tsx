import React from "react";

import { PanelProps } from "./types";

export const Panel = ({ children, title, className }: PanelProps) => {
  return (
    <section
      className={`panel inline-block p-3 text-white bg-dark-panel-bg ${className}`}
    >
      {title && <h1 className="text-1xl pb-5">{title}</h1>}
      <main className="bg-dark-panel-sub-bg drop-shadow-xl rounded sm p-3">
        {children}
      </main>
    </section>
  );
};
