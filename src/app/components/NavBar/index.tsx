import { UserIcon } from "../Icons/icons/UserIcon";
import { HomeIcon } from "../Icons/icons/HomeIcon";
import { GameIcon } from "../Icons/icons/GameIcon";
import { MedalIcon } from "../Icons/icons/MetalIcon";
import { LocationIcon } from "../Icons/icons/LocationIcon";
import { ReactNode } from "react";

interface NavBarListProps {
  children: ReactNode;
  className?: string;
}

const NavBarList = ({ children, className }: NavBarListProps) => {
  return (
    <ul
      className={`my-4 items-start border-t border-indigo-300/40 hover:border-indigo-300/90 flex flex-col gap-2 ${className}`}
    >
      {children}
    </ul>
  );
};

const NavBarListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center">
      {" "}
      {children}
    </li>
  );
};
export default function Navbar() {
  return (
    <nav className="flex flex-col bg-slate-900 border-r border-indigo-300/40 hover:border-indigo-300/90 text-white w-72 p-2 h-screen">
      <NavBarList className="flex-grow">
        <NavBarListItem>
          {" "}
          <HomeIcon className="size-5" />
          Home
        </NavBarListItem>
        <NavBarListItem>
          {" "}
          <GameIcon className="size-5" /> Games
        </NavBarListItem>
        <NavBarListItem>
          {" "}
          <MedalIcon className="size-5" /> Top 10
        </NavBarListItem>
        <NavBarListItem>
          {" "}
          <LocationIcon className="size-5" /> Walkthroughs
        </NavBarListItem>
      </NavBarList>
      <NavBarList>
        <NavBarListItem>
          <UserIcon className="size-5" />
          Home
        </NavBarListItem>
      </NavBarList>
    </nav>
  );
}
