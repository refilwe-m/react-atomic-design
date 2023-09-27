import React from "react";
import dayjs from "dayjs";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";

import { Event } from "react-big-calendar";

const myEventsList: Event[] = [
  { start: new Date(), end: new Date(), title: "normal event" },
  { start: new Date(), end: new Date("30-09-2023"), title: "special event" },
];

const localizer = momentLocalizer(moment);

export const EventsPage = () => {
  return (
    <div>
      <h1 className="flex justify-center text-white text-2xl font-bold py-2">
        Events Booked
      </h1>
      <Calendar
        className="text-white bg-slate-900"
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, color: "white" }}
      />
    </div>
  );
};
