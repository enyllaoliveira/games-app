import { cn } from "@/app/helpers/cn";
import Link from "next/link";
import { NavBarListItem } from "./NavBarListItem";
import { NavBarListItemLinkProps } from "./types";

export const NavBarListItemLink = ({
  href,
  children,
  className,
  ...props
}: NavBarListItemLinkProps) => {
  return (
    <NavBarListItem className={cn("p-0", className)}>
      <Link
        className="flex gap-2 items-center p-2 w-full rounded-lg flex-grow"
        href={href}
        {...props}
      >
        {" "}
        {children}{" "}
      </Link>
    </NavBarListItem>
  );
};
