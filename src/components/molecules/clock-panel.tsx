import React from "react";

import { Panel } from "../atoms/panel";
import { GiTimeSynchronization } from "react-icons/gi";

export const ClockPanel = ({className}:{className?:string}) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${
    hours > 12 ? "PM" : "AM"
  }`;

  return (
    <Panel className={className}>
      <section className="clock-panel">
        <h1>Clock in time</h1>
        <p className="text-3xl py-3">{time}</p>
        <section className="text-green-400 sync-status flex gap-2 items-center">
          <GiTimeSynchronization />
          <p className="">Device in sync</p>
        </section>
      </section>
    </Panel>
  );
};
