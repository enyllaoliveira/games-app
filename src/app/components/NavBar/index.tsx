import { UserIcon } from "../Icons/icons/UserIcon";
import { HomeIcon } from "../Icons/icons/HomeIcon";
import { GameIcon } from "../Icons/icons/GameIcon";
import { MedalIcon } from "../Icons/icons/MetalIcon";
import { LocationIcon } from "../Icons/icons/LocationIcon";
import { cn } from "@/app/helpers/cn";

type NavBarListProps = React.ComponentProps<"ul">;
type NavBarListItem = React.ComponentProps<"li">;
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

const NavBarListItem = ({ children, className, ...props }: NavBarListItem) => {
  return (
    <li
      className={cn(
        "my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center",
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
