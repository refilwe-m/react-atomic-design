import React from "react";

import { PanelProps } from "./types";

export const Panel = ({ children, title }: PanelProps) => {
  return (
    <section className="panel inline-block p-2 text-white bg-gray-900">
      {title && <h1 className="text-2xl">{title}</h1>}
      <main className="bg-gray-700 p-3">{children}</main>
    </section>
  );
};
