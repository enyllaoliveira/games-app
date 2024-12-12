import { PageWrapper } from "@/components/PageWrapper";

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);
  return (
    <PageWrapper>
      <h1 className="bg-black ml-72"> oi </h1>
    </PageWrapper>
  );
}
