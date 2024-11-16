import { UserIcon } from "../Icons/icons/UserIcon";
import { HomeIcon } from "../Icons/icons/HomeIcon";
import { GameIcon } from "../Icons/icons/GameIcon";
import { MedalIcon } from "../Icons/icons/MetalIcon";
import { LocationIcon } from "../Icons/icons/LocationIcon";

export default function Navbar() {
  return (
    <nav className="flex flex-col bg-slate-900 border-r border-indigo-300/40 hover:border-indigo-300/90 text-white w-72 p-2 h-screen">
      <ul className="flex-grow my-4">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center">
          {" "}
          <HomeIcon className="size-5" />
          Home
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center">
          {" "}
          <GameIcon className="size-5" /> Games
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center">
          {" "}
          <MedalIcon className="size-5" /> Top 10
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center">
          {" "}
          <LocationIcon className="size-5" /> Walkthroughs
        </li>
      </ul>
      <ul className="my-4 border-t border-indigo-300/40 hover:border-indigo-300/90 flex gap-2 items-center">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer flex gap-2 items-center">
          <UserIcon className="size-5" />
          Home
        </li>
      </ul>
    </nav>
  );
}
