import { Outlet, Route, Routes, useNavigate } from "react-router";

import { ProfilePanel } from "..";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ProfilePage = () => {
  const data = [
    {
      name: "Martha",
      completed: 5,
      doing: 2,
      backlog: 10,
    },
    {
      name: "Mary",
      completed: 1,
      doing: 3,
      backlog: 4,
    },
    {
      name: "Elizabeth",
      completed: 3,
      doing: 1,
      backlog: 16,
    },
  ];
  return (
    <section className="profile-panel flex-col gap-4">
      <ProfilePanel />
      {(
        <section className="flex flex-col">
          <div className="legend flex gap-4 justify-end text-sm">
            <div className="flex gap-2 items-center text-gray-300">
              <div className="color bg-orange-500 h-3 w-3 rounded-sm" />
              <p>Doing</p>
            </div>
            <div className="flex gap-2 items-center text-gray-300">
              <div className="color bg-purple-500 h-3 w-3 rounded-sm" />
              <p>Completed</p>
            </div>
            <div className="flex gap-2 items-center text-gray-300">
              <div className="color bg-yellow-500 h-3 w-3 rounded-sm" />
              <p>Backlog</p>
            </div>
          </div>
          <div className="chart">
            <LineChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <Line
                type="monotone"
                dataKey="completed"
                stroke="rgb(168 85 247)"
              />
              <Line type="monotone" dataKey="doing" stroke="rgb(249 115 22)" />
              <Line type="monotone" dataKey="backlog" stroke="rgb(234 179 8)" />
              <YAxis />
              <XAxis
                dataKey="name"
                angle={10}
                padding={{ left: 30 }}
                tickLine={false}
              />
            </LineChart>
          </div>
        </section>
      ) || <Outlet />}
    </section>
  );
};
