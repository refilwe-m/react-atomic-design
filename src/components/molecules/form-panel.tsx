import React from "react";

import { Panel } from "../atoms/panel";

export const FormPanel = () => {
  return (
    <Panel>
      <section className="form-panel">
        <form action="" className="flex flex-col gap-2">
          <section className="title flex items-center mr-4">
            <input
              className="pr-3 mr-2 bg-dark-panel-sub-bg border-white-1"
              type="checkbox"
            />
            <label className="text-white ml-2">Title</label>
          </section>
          <input
            className="border-none text-xs bg-transparent ml-8 text-white"
            placeholder="Description"
            name="description"
            id="description"
            value="Description"
          />
        </form>
      </section>
    </Panel>
  );
};
