import { HOMEPAGE_QUERY } from "@/common/queries/pages/home.queries";
import HomePageView from "@/common/views/home-page/home-page-view";
import { sanityFetch } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export default async function Home() {
  const data = await sanityFetch({
    query: HOMEPAGE_QUERY,
  });

  if (!data) return notFound();

  return (
    <>
      <HomePageView homepage={data} />
    </>
  );
}
