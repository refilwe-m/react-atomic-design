import React from "react";
import dayjs from "dayjs";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(dayjs);
const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" },
];

export const EventsPage = () => {
  return (
    <div>
      <h1>Events Booked</h1>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
