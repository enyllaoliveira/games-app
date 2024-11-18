import { cn } from "@/app/helpers/cn";
import { NavBarListProps } from "./types";

export const NavBarList = ({
  children,
  className,
  ...props
}: NavBarListProps) => {
  return (
    <ul
      className={cn(
        "my-4 items-start border-t border-indigo-300/40 hover:border-indigo-300/90 flex flex-col gap-2",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};
