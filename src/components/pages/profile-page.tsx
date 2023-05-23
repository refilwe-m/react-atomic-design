import { Outlet, Route, Routes, useNavigate } from "react-router";

import { ProfilePanel } from "..";
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
      <ProfilePanel />
      <Outlet />
    </section>
  );
};
