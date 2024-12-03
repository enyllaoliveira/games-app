import Games from "@/libs/database/Games";

const HOME_LATEST_COUNT = 4;

const GamesService = {
  getGamesList: async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit + HOME_LATEST_COUNT;
    const data = await Games.get({ limit, offset });
    const total = await Games.count({});
    const totalPages = Math.ceil((total - HOME_LATEST_COUNT) / limit);

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
        totalPages,
      },
    };
  },

  getRandomGames: async (limit = 10) => {
    const total = await Games.count({});
    const offset = Math.max(0, Math.floor(Math.random() * total) - limit);
    const data = await Games.get({ limit, offset });
    const sorted = data.sort(() => (Math.random() > 0.5 ? 1 : -1));
    const totalPages = Math.ceil((total - HOME_LATEST_COUNT) / limit);

    console.log("oi", { limit, offset });
    sorted.map((g) => console.log(g.id, g.title));

    return {
      data,
      metadata: {
        page: 1,
        limit: limit,
        offset,
        total,
        totalPages,
      },
    };
  },
};

export default GamesService;
