import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScrollableGameList = ({ games }: { games: any[] }) => {
  return (
    <div className="flex flex-col h-full">
      {games.map((game) => (
        <div
          key={game.id}
          className="h-[var(--item-size)] w-full flex-shrink-0"
        >
          <Image
            className="h-full w-full object-cover"
            src={`https://raw.githubusercontent.com/emersonbroga/nintendo-64-games/main/images/${game.image}`}
            alt={game.title}
            width={380}
            height={80}
          />
        </div>
      ))}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Hero = ({ games }: { games: any[] }) => {
  return (
    <div className="ml-auto h-full border border-x-slate-700 p-2 rounded-lg w-auto">
      <div className="flex flex-col h-full gap-2">
        <div className="scroll-ttb flex flex-col gap-2">
          <ScrollableGameList games={games.slice(0, 10)} />
          <ScrollableGameList games={games.slice(0, 10)} />
        </div>
        <div className="scroll-btt flex flex-col gap-2">
          <ScrollableGameList games={games.slice(10, 20)} />
          <ScrollableGameList games={games.slice(10, 20)} />
        </div>
        <div className="scroll-ttb flex flex-col gap-2">
          <ScrollableGameList games={games.slice(20, 30)} />
          <ScrollableGameList games={games.slice(20, 30)} />
        </div>
        <div className="scroll-btt flex flex-col gap-2">
          <ScrollableGameList games={games.slice(30, 40)} />
          <ScrollableGameList games={games.slice(30, 40)} />
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const Hero = ({ games }: { games: any[] }) => {
//   return (
//     <div className="h-full  border border-x-slate-700 p-2 rounded-lg w-1/2 m">
//       <div className="flex flex-col h-full overflow-hidden gap-2">
//         <div className="scroll-ttb h-full">
//           <ScrollableGameList games={games.slice(0, 10)} />
//         </div>
//         <div className="scroll-btt h-full">
//           <ScrollableGameList games={games.slice(10, 20)} />
//         </div>
//       </div>
//     </div>
//   );
// };
