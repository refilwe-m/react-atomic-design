import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

import { UserPanel, JobPanel, ClockPanel, Button, TableJobPanel } from "..";
import { ProfileService } from "../../services/sub-services/profile-service";
import { UserProps } from "../molecules/types";

export const ReportPage = () => {
  const [userDetails, setUserDetails] = useState<UserProps>({
    name: "",
    job: "",
    email: "",
    profile: "",
  });

  const [clockDetails, setClockDetails] = useState({
    time: "",
    sync: false,
  });
  const [jobs, setJobs] = useState([]);

  const [isList, setIsList] = useState(true);

  const getReports = async () => {
    return await ProfileService.report();
  };

  useEffect(() => {
    getReports().then((report) => {
      const { userDetails, clockDetails, jobs } = report;
      setUserDetails(userDetails);
      setClockDetails(clockDetails);
      setJobs(jobs);
    });
  }, []);

  return (
    <section className="report-page flex flex-col gap-6  ">
      <UserPanel className="flex justify-center" userDetails={userDetails} />
      <ClockPanel
        time={clockDetails.time}
        sync={clockDetails.sync}
        className="pl-7"
      />
      <section className="view-type flex gap-6">
        <p className="text-white">List View</p>
        <Switch
          checked={isList}
          onChange={() => setIsList(!isList)}
          className={`${
            isList ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              isList ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </section>

      {isList ? (
        <JobPanel jobs={jobs} className="pl-9" />
      ) : (
        <TableJobPanel jobs={jobs} />
      )}
    </section>
  );
};
