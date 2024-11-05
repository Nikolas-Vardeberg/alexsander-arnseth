import PostCard from "@/common/components/ui/card/post-card";
import { ARTICLES_QUERY } from "@/common/queries/pages/article.queries"
import { sanityFetch } from "@/sanity/lib/client"
import { notFound } from "next/navigation";



export default async function ArticlesPage() {
    const data = await sanityFetch({
        query: ARTICLES_QUERY,
    });

    if (!data) return notFound();

    return(
        <div>
            <div className="mx-auto container px-4 sm:px-5 flex flex-col py-10">
                <div className="mx-auto w-full grid grid-cols-12">
                    <div className="col-span-12 md:col-span-10">
                        <h3 className="text-start text-black !font-semibold text-3xl">Les våre deilige blogger!!</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8 mt-8">
                    {data?.map((post, k) => (
                        <PostCard key={k} data={post ?? []} />
                    ))}
                </div>
            </div>
        </div>
    )
}