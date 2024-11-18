import { UserIcon } from "../Icons/icons/UserIcon";
import { HomeIcon } from "../Icons/icons/HomeIcon";
import { GameIcon } from "../Icons/icons/GameIcon";
import { MedalIcon } from "../Icons/icons/MetalIcon";
import { LocationIcon } from "../Icons/icons/LocationIcon";
import { cn } from "@/helpers/cn";
import { NavBarList } from "./NavBarList";
import { NavBarListItemLink } from "./NavBarListItemLink";
import { NavBarProps } from "./types";

export default function Navbar({ className, ...props }: NavBarProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 flex flex-col bg-slate-900 border-r border-indigo-300/40 hover:border-indigo-300/90 text-slate-300 w-64 p-2 h-screen",
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
        <NavBarListItemLink
          className="border-t border-indigo-300/40 hover:border-indigo-300/90 w-full"
          href="/user"
        >
          <UserIcon className="size-5 " />
          User
        </NavBarListItemLink>
      </NavBarList>
    </nav>
  );
}
