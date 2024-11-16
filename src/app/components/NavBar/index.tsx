export default function Navbar() {
  return (
    <nav className="flex flex-col bg-slate-900 border-r border-indigo-300/40 hover:border-indigo-300/90 text-white w-72 p-2 h-screen">
      <ul className="flex-grow my-4">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">
          {" "}
          Home
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">
          {" "}
          Home
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">
          {" "}
          Home
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">
          {" "}
          Home
        </li>
      </ul>
      <ul className="my-4 border-t border-indigo-300/40 hover:border-indigo-300/90">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">
          {" "}
          Home
        </li>
      </ul>
    </nav>
  );
}
