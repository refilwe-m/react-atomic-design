import React, { ReactNode, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

import { Button, FormPanel, Panel } from "..";
import { ProfileService } from "../../services/sub-services/profile-service";
import { FormPanelProps } from "../molecules/types";

export const FormPage = () => {
  const initialForms: ReactNode[] = [];

  const mapForms = () => {};

  for (let i = 0; i < 20; i++) {
    initialForms.push(<FormPanel />);
  }

  const [forms, setForms] = useState<ReactNode[]>(initialForms);

  const getForms = async () => {
    const { data } = await ProfileService.forms();
    return data?.forms;
  };

  useEffect(() => {
    getForms().then((forms) => {
      setForms(
        forms.map(({ name, description }: FormPanelProps) => (
          <FormPanel name={name} description={description} />
        ))
      );
    });
  }, []);

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
