import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useLocation, matchRoutes } from "react-router-dom";

export const Breadcrumb = () => {
  const url = useLocation();
  const currentPath = url.pathname;

  const listItems = (
    <li
      className={`${
        /*  path === currentPath && */ "text-blue-700 font-semibold"
      } flex items-center hover:text-blue-400`}
    >
      <Link to={currentPath}>{currentPath.slice(1)}</Link>
      <BsChevronDoubleRight className="ml-5" />
    </li>
  );
  return (
    <section className="breadcrumb p-2 text-white">
      <ul className="flex gap-10">{listItems}</ul>
    </section>
  );
  