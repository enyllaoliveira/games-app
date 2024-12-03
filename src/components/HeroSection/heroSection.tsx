// "use client";

// import { useEffect, useState } from "react";
// import { Hero } from "@/components/Hero/hero";
// import GamesService from "@/services/Games";

// interface Game {
//   id: number;
//   slug: string;
//   title: string;
//   year: number;
//   image: string;
//   link: string;
//   platform: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export const HeroSection = () => {
//   const [heroGames, setHeroGames] = useState<Game[] | null>(null);

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const result = await GamesService.getRandomGames(40);
//         setHeroGames(result.data);
//       } catch (error) {
//         console.error("Erro ao buscar jogos:", error);
//       }
//     };

//     fetchGames();
//   }, []);

//   return (
//     <div className="w-full h-[35vh] bg-red-300 flex-center">
//       <Hero games={heroGames || []} />
//     </div>
//   );
// };
