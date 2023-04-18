import React, { useEffect, useState } from "react";

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
        <Button
          variant="text"
          text="List"
          className={`${
            isList ? "text-blue-500 underline underline-yellow-500" : ""
          }`}
          onClick={() => setIsList(true)}
        />
        <Button
          variant="text"
          text="Table"
          className={`${
            isList ? "" : "text-blue-500 underline underline-yellow-500"
          }`}
          onClick={() => setIsList(false)}
        />
      </section>
      {isList ? (
        <JobPanel jobs={jobs} className="pl-9" />
      ) : (
        <TableJobPanel jobs={jobs} />
      )}
    </section>
  );
};
