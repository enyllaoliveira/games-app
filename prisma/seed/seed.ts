import { PrismaClient } from "@prisma/client";
import articles from "../../src/data/articles.json";
import { slugify } from "../../src/helpers/slugify";

const prisma = new PrismaClient();

const IsDev = process.env.NODE_ENV === "development";
async function main() {
  console.log("DB seed");
  await sendArticle();
}

async function sendArticle() {
  if (!IsDev) {
    throw new Error("Node env is not a development environment");
  }
  await prisma.article.deleteMany();
  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1",
    "Article"
  );
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
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
