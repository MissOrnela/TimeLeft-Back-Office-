"use client";
//import { useRouter } from "next/router";
import { useState } from "react";

export default function Sort({
  defaultSort = "date",
  defaultOrder = "asc",
}: {
  defaultSort?: string;
  defaultOrder?: "asc" | "desc";
}) {
  const [sortColumn, setSortColumn] = useState(defaultSort);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(defaultOrder);
  //const router = useRouter();

  const handleColumnChange = (value: string) => {
    setSortColumn(value);
    updateURL(value, sortOrder);
  };

  const handleOrderChange = (value: "asc" | "desc") => {
    setSortOrder(value);
    updateURL(sortColumn, value);
  };

  const updateURL = (column: string, order: "asc" | "desc") => {
    const params = new URLSearchParams(window.location.search);
    params.set("sort", column);
    params.set("order", order);
    params.set("page", "1");
    // router.push(`?${params.toString()}`);

    window.location.search = params.toString();
  };

  return (
    <div className="flex gap-2">
      <select
        value={sortColumn}
        onChange={(e) => {
          handleColumnChange(e.target.value);
        }}
        className="border p-1 rounded"
      >
        <option value="date">Date</option>
        <option value="type">Type</option>
        <option value="status">Status</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => {
          handleOrderChange(e.target.value as "asc" | "desc");
        }}
        className="border p-1 rounded"
      >
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}
