import React from "react";

import { Button, Panel } from "../atoms";
import { Formik } from "formik";
import { InputField } from "../molecules";

type SideFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideForm = ({ isOpen, onClose }: SideFormProps) => {
  return (
    <Panel
      className={`fixed top-0 bottom-0 bg-[#141517] right-0 w-300 z-50 transition-all duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } sm:w-full sm:max-w-md`}
    >
      <Formik
        initialValues={{ title: "Title", description: "Description" }}
        onSubmit={onClose}
      >
        {({ values }) => (
          <form className="flex flex-col gap-11">
            <InputField
              type="text"
              name="title"
              placeholder="Title"
              color="black"
            />
            <InputField
              type="text"
              name="description"
              placeholder="Description"
              color="black"
            />

            <Button className="self-center w-14" text="Add" onClick={onClose} />
          </form>
        )}
      </Formik>
    </Panel>
  );
};
