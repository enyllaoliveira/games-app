"use client";

import Link from "next/link";
import { ELLIPSI_LEFT, ELLIPSI_RIGHT, generatePages } from "./generatePages";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/helpers/cn";

export const Pagination = ({
  currentePage,
  totalPages,
}: {
  currentePage: number;
  totalPages: number;
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const pages = generatePages(currentePage, totalPages);

  return (
    <ul className="inline-flex h-10 overflow-hidden rounded-md text-base border border-indigo-400/40">
      {pages.map((page) => {
        const isEllipsis = page === ELLIPSI_LEFT || page === ELLIPSI_RIGHT;
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        const url = `${pathName}?${params.toString()}`;
        const isCurrentPage = page === currentePage;

        if (isEllipsis) {
          return (
            <li
              key={page}
              className="border-x border-indigo-400/40 first:rounded-l last:rounded-r first:border-0 last:border-0"
            >
              <span className="flex h-10 items-center justify-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300">
                ...
              </span>
            </li>
          );
        }

        return (
          <li
            key={page}
            className="border-x border-indigo-400/40 first:rounded-l last:rounded-r first:border-0 last:border-0"
          >
            <Link
              className={cn(
                "flex h-10 items-center justify-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300",
                {
                  ":bg-indigo-400/50 text-slate-300": isCurrentPage,
                }
              )}
              href={url}
            >
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
