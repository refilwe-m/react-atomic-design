import React from "react";
import {
  useReactTable,
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { Panel } from "../atoms";
import { JobPanelProps, JobProps } from "./types";

export const TableJobPanel = ({ className, jobs }: JobPanelProps) => {
  const data = jobs;
  const columnHelper = createColumnHelper<JobProps>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Job Name",
    }),
    columnHelper.accessor("clock", {
      cell: (info) => info.getValue(),
      header: "Clock in Time",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Panel className="table-job-panel">
      <table className="w-full">
        <thead className="border border-transparent border-b-gray-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
};
