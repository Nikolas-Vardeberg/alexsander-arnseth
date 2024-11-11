import { ARTICLE_QUERY } from "@/common/queries/pages/article.queries";
import ArticlePageView from "@/common/views/article-page/article-page-view";
import { sanityFetch } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    }
}

export default async function ArticlePage({ params }: Props) {
    const data = await sanityFetch({
        query: ARTICLE_QUERY,
        params,
    });

    if (!data) return notFound();

    return(
        <>
            <ArticlePageView data={data} />
        </>
    )
}