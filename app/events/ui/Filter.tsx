"use client";
import { useState } from "react";

export default function Filter({
  defaultFilter = "",
}: {
  defaultFilter?: string;
}) {
  const [filterStatus, setFilterStatus] = useState(defaultFilter);
  const statuses = ["", "upcoming", "live", "past"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterStatus(value);
    const params = new URLSearchParams(window.location.search);
    params.set("filter", value);
    params.set("page", "1");
    window.location.search = params.toString();
  };

  return (
    <select
      value={filterStatus}
      onChange={handleChange}
      className="border p-1 rounded"
    >
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status === "" ? "Status" : status}
        </option>
      ))}
    </select>
  );
}
