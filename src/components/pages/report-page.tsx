import React, { useEffect, useState } from "react";

import { UserPanel, JobPanel, Panel, ClockPanel } from "..";
import { ProfileService } from "../../services/sub-services/profile-service";
import { JobProps, UserPanelProps, UserProps } from "../molecules/types";

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
      <JobPanel jobs={jobs} className="pl-9" />
    </section>
  );
};
