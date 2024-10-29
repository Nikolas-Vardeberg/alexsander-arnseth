import { ARTICLES_QUERY } from "@/common/queries/pages/article.queries";
import { sanityFetch } from "@/sanity/lib/client";
import { notFound } from "next/navigation";


export default async function ArticlesPage() {
    const data = await sanityFetch({
        query: ARTICLES_QUERY,
    });

    if (!data) return notFound();

    //TODO: CREATE POST COMPONENT
    
    return(
        <>
            <pre>
                {JSON.stringify(data, undefined, 2)}
            </pre>
        </>
    )
}