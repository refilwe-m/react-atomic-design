import React from "react";
import { Panel } from "../atoms/panel";
import { GiTimeSynchronization } from "react-icons/gi";

export const ClockPanel = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours}:${minutes} ${hours > 12 ? "PM" : "AM"}`;

  return (
    <Panel>
      <>
      <h1>Clock in time</h1>
        <p className="text-3xl">{time}</p>
        <section className="sync-status flex  gap-2 items-center text-green-500">
          <GiTimeSynchronization/>
          <p>
             Device in sync
          </p>
        </section>
      </>
    </Panel>
  );
};
