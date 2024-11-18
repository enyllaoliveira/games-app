import { cn } from "@/helpers/cn";
import { NavBarListItemProps } from "./types";

export const NavBarListItem = ({
  children,
  className,
  ...props
}: NavBarListItemProps) => {
  return (
    <li
      className={cn(
        "my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center w-full",
        className
      )}
      {...props}
    >
      {" "}
      {children}
    </li>
  );
};
