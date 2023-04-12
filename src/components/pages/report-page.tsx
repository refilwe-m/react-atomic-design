import React from "react";

import { UserPanel, JobPanel, Panel, ClockPanel } from "..";

export const ReportPage = () => {
  return (
    <section className="report-page flex flex-col gap-6  ">
      <UserPanel className="flex justify-center"/>
      <ClockPanel className="pl-7" />
      <JobPanel className="pl-9" />
    </section>
  );
};
