import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const navLinks = [
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Reports",
      path: "/report",
    },
    {
      name: "Forms",
      path: "/form",
    },
    {
      name: "Scanner",
      path: "/scanner",
    },
    {
      name: "My IP",
      path: "/my-ip",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Attendees",
      path: "/attendees",
    },
    {
      name: "Logout",
      path: "/login",
    },
  ];
  return (
    <nav className="w-full sticky bg-[#191a1f] text-blue-500">
      <ul className="flex justify-between items-center p-3">
        <h2 className="text-2xl font-bold">React Workshop</h2>
        <section className="flex justify-between gap-6">
          {navLinks.map((link) => (
            <NavLink to={link.path} className="text-xs hover:text-blue-300">
              {link.name}
            </NavLink>
          ))}
        </section>
      </ul>
    </nav>
  );
};
