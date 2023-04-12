import React, { ReactNode } from "react";
import { FiPlus } from "react-icons/fi";

import { Button, FormPanel, Panel } from "..";

export const FormPage = () => {
  const forms: ReactNode[] = [];
  for (let i = 0; i < 20; i++) {
    forms.push(<FormPanel />);
  }

  return (
    <Panel>
      <header className="flex justify-between">
        <h1>Forms List</h1>
        <Button
          className="px-2 py-2 text-xs"
          variant="outline"
          icon={<FiPlus />}
          text="Create New"
        />
      </header>
      <form action="">
        <p className="text-sm my-3">Forms assigned</p>
        <section className="grid grid-cols-5">{forms}</section>
      </form>
    </Panel>
  );
};
