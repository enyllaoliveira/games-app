import { PageWrapper } from "@/components/PageWrapper";
import { Pagination } from "@/components/Pagination/Pagination";
import GamesService from "@/services/Games";
import Image from "next/image";

export default async function GamesPage({
  searchParams,
}: {
  searchParams?: { page?: string; limit?: string };
}) {
  const currentePage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 12;
  const games = await GamesService.getGamesList(currentePage, limit);

  return (
    <PageWrapper>
      <div className=" flex flex-col bg-slate-800">
        <h1 className="text-3xl my-6"> Games </h1>
        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
          {games.data.map((game) => (
            <div
              key={game.slug}
              className="flex flex-col relative overflow-hidden"
            >
              <div className=" h-full w-full">
                <Image
                  src={`https://raw.githubusercontent.com/emersonbroga/nintendo-64-games/main/images/${game.image}`}
                  alt={game.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  width={600}
                  height={400}
                />
              </div>
              <p className="bottom-0 pt-2 pb-2 w-full">{game.title}</p>
            </div>
          ))}
        </div>
        <div className="my-8">
          <Pagination currentePage={1} totalPages={games.metadata.totalPages} />
        </div>
      </div>
    </PageWrapper>
  );
}
