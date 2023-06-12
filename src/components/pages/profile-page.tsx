import { Outlet, Route, Routes, useNavigate } from "react-router";

import { Button, ProfilePanel } from "..";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Rectangle,
  ReferenceArea,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ProfilePage = () => {
  return (
    <section className="profile-panel flex-col gap-4">
      <Button
        variant="outline"
        text="Book Technician"
        onClick={() => console.log("Do Scheduler")}
        func="delete"
        className="px-2"
      />
      <ProfilePanel />
      <Outlet />
    </section>
  );
};
