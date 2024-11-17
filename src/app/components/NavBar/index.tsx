import { UserIcon } from "../Icons/icons/UserIcon";
import { HomeIcon } from "../Icons/icons/HomeIcon";
import { GameIcon } from "../Icons/icons/GameIcon";
import { MedalIcon } from "../Icons/icons/MetalIcon";
import { LocationIcon } from "../Icons/icons/LocationIcon";
import { cn } from "@/app/helpers/cn";
import Link from "next/link";

type NavBarListProps = React.ComponentProps<"ul">;
type NavBarListItem = React.ComponentProps<"li">;
type NavBarListItemLink = React.ComponentProps<"li">;
type NavBarListItemLinkProps = React.ComponentProps<typeof Link>;
type NavBarProps = React.ComponentProps<"nav">;

const NavBarList = ({ children, className, ...props }: NavBarListProps) => {
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
const NavBarListItemLink = ({
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

const NavBarListItem = ({ children, className, ...props }: NavBarListItem) => {
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
export default function Navbar({ className, ...props }: NavBarProps) {
  return (
    <nav
      className={cn(
        "flex flex-col bg-slate-900 border-r border-indigo-300/40 hover:border-indigo-300/90 text-white w-64 p-2 h-screen",
        className
      )}
      {...props}
    >
      <NavBarList className="flex-grow">
        <NavBarListItemLink href="#">
          {" "}
          <HomeIcon className="size-5" />
          Home
        </NavBarListItemLink>
        <NavBarListItemLink href="/games">
          {" "}
          <GameIcon className="size-5" /> Games
        </NavBarListItemLink>
        <NavBarListItemLink href="/top-10">
          {" "}
          <MedalIcon className="size-5" /> Top 10
        </NavBarListItemLink>
        <NavBarListItemLink href="/walkthroughs">
          {" "}
          <LocationIcon className="size-5" /> Walkthroughs
        </NavBarListItemLink>
      </NavBarList>
      <NavBarList>
        <NavBarListItemLink href="/user">
          <UserIcon className="size-5" />
          User
        </NavBarListItemLink>
      </NavBarList>
    </nav>
  );
}
