import { Hero } from "@/components/Hero/hero";
import { PageWrapper } from "@/components/PageWrapper";
import { Pagination } from "@/components/Pagination/Pagination";
import ArticleService from "@/services/Articles";
import GamesService from "@/services/Games";
import Image from "next/image";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; limit?: string };
}) {
  const currentePage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  const articles = await ArticleService.getHomeArticles(currentePage, limit);
  const latestArticles = await ArticleService.getHomeLatestArticles();

  const heroGames = await GamesService.getRandomGames(40);

  return (
    <PageWrapper>
      <div className="container my-6 h-[35vh] bg-red-300 flex-center overflow-hidden">
        <Hero games={heroGames.data} />
      </div>
      <div className="container mx-auto my-6 bg-slate-800">
        <div className="grid grid-cols-4 gap-4 ">
          {latestArticles.data.map((article) => (
            <div
              key={article.title}
              className="flex-center relative overflow-hidden"
            >
              <div className=" h-full w-full">
                <Image
                  src={`/assets/images/articles/${article.image}`}
                  alt={article.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  width={600}
                  height={400}
                />
              </div>
              <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full">
                {article.title}
              </p>
            </div>
          ))}
        </div>

        <div className="container mx-auto my-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 flex flex-col gap-4">
              <div className="flex gap-4 bg-slate-800 rounded-md">
                <div className="flex flex-col gap-2 py-4 bg-slate-800">
                  {articles.data.map((article) => (
                    <section
                      key={article.title}
                      className="flex gap-2 bg-slate-800 rounded-md py-4"
                    >
                      <div className="flex items-center">
                        <div className="h-40 rounded-r-lg overflow-hidden">
                          <Image
                            src={`/assets/images/articles/${article.image}`}
                            alt={article.excerpt}
                            className="w-full h-full object-cover transition duration-500 hover:scale-105 "
                            width={600}
                            height={400}
                          />
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-2 pl-4">
                        <p className="text-2xl mb-4">{article.title}</p>
                        <p>{article.publishedAt.toISOString()}</p>

                        <p>{article.excerpt}</p>
                        <Link
                          href={`/articles/${article.slug}`}
                          className="bg-slate-700 hover:bg-slate-900 rounded-lg px-4 py-2 inline max-w-max"
                        >
                          See more
                        </Link>
                      </div>
                    </section>
                  ))}
                  <div className="my-8">
                    <Pagination
                      currentePage={articles.metadata.page}
                      totalPages={articles.metadata.totalPages}
                    />
                  </div>

                  <div className="my-8" />
                </div>
              </div>
            </div>
            <div className="col-span-4 bg-red-600">B</div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
