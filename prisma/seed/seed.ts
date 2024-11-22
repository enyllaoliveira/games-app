import { PrismaClient } from "@prisma/client";
import articles from "../../src/data/articles.json";
import games from "../../src/data/games.json";

import { slugify } from "../../src/helpers/slugify";

const prisma = new PrismaClient();

const IsDev = process.env.NODE_ENV === "development";
async function main() {
  console.log("DB seed");
  const [, , ...args] = process.argv;
  // -truncate

  const truncate = !!args.find((arg) => arg === "-truncate");
  const articles = !!args.find((arg) => arg === "articles");
  const games = !!args.find((arg) => arg === "games");

  if (truncate) {
    if (articles) await truncateArticles();
    if (games) await truncateGamesAndGenres();
  }

  if (articles) {
    await sendArticle();
  }

  if (games) {
    await seedGamesAndGenres();
  }
}

async function sendArticle() {
  if (!IsDev) {
    throw new Error("Node env is not a development environment");
  }

  for (const article of articles) {
    const record = await prisma.article.create({
      data: {
        title: article.title,
        slug: slugify(article.title),
        excerpt: article.excerpt,
        content: article.content,
        image: article.image,
        publishedAt: new Date(article.publish_date),
      },
    });
    console.log("artigos criados:", record.id, record.title);
  }
}

async function seedGamesAndGenres() {
  for (const game of games) {
    const genres = game.genre.map((title) => {
      const slug = slugify(title);
      return {
        genre: {
          connectOrCreate: {
            where: { slug },
            create: {
              title,
              slug,
            },
          },
        },
      };
    });

    const record = await prisma.game.create({
      data: {
        title: game.title,
        slug: game.slug,
        year: game.year,
        image: game.fileName,
        link: game.link || "#",
        platform: "Nintendo 64",
        genres: {
          create: genres,
        },
      },
    });

    console.log("jogo criado:", record.id, record.title);
  }
}

async function truncateGamesAndGenres() {
  await prisma.gameGenre.deleteMany();
  await prisma.game.deleteMany();
  await prisma.genre.deleteMany();

  await prisma.$executeRawUnsafe(
    `DELETE FROM sqlite_sequence WHERE name='GameGenre';`
  );
  await prisma.$executeRawUnsafe(
    `DELETE FROM sqlite_sequence WHERE name='Game';`
  );
  await prisma.$executeRawUnsafe(
    `DELETE FROM sqlite_sequence WHERE name='Genre';`
  );

  console.log(
    "Tabelas de jogos e gêneros truncadas e sequências de IDs reiniciadas."
  );
}

async function truncateArticles() {
  await prisma.article.deleteMany();

  await prisma.$executeRawUnsafe(
    `DELETE FROM sqlite_sequence WHERE name='Article';`
  );

  console.log("Tabela de artigos truncada e sequência de IDs reiniciada.");
}
console.log(process.argv);
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
