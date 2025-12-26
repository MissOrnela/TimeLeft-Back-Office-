"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  totalEvents,
  page,
  pageSize = 10,
}: {
  totalEvents: number;
  page: number;
  pageSize?: number;
}) {
  const totalPages =
    totalEvents % pageSize === 0
      ? totalEvents / pageSize
      : Math.floor(totalEvents / pageSize) + 1;
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (p: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(p));
    router.push(`?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNum = i + 1;
        return (
          <Button
            key={pageNum}
            variant={page === pageNum ? "default" : "outline"}
            onClick={() => goToPage(pageNum)}
          >
            {pageNum}
          </Button>
        );
      })}
    </div>
  );
}
