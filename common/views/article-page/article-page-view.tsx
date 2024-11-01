import Blocks from "@/common/components/blocks/Blocks";
import PortableText from "@/common/components/PortableText";
import PostCard from "@/common/components/ui/card/post-card";
import { ArticlePage } from "@/common/types/pages/article.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const ArticlePageView = ({ data: page }: { data: ArticlePage }) => {
    console.log(page.mainImage.url)

    return(
        <>
            <div className="pt-8 bg-primary-light">
                <div className="mx-auto w-full container px-4 sm:px-5 flex flex-col gap-6 my-10">
                    <h1 className="text-black !font-bold text-3xl">{page.title}</h1>
                    
                    <Image
                        src={page.mainImage ? urlFor(page.mainImage.url).url(): ""}
                        alt={page.mainImage.alt}
                        height={600}
                        width={600}
                    />
                    <div className="prose lg:prose-xl">
                        <PortableText value={page.body ?? []} />
                    </div>
                </div>
                <Blocks blocks={page.blocks ?? []} />

                {page.related && page.related.length > 0 && (
                    <div className="mx-auto container px-4 sm:px-5 flex flex-col py-10">
                        <div className="mx-auto w-full grid grid-cols-12">
                            <div className="col-span-12 md:col-span-10">
                                <h3 className="text-start text-black !font-semibold text-3xl">Les våre deilige blogger!!</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8 mt-8">
                            {page.related.map((post, k) => (
                                <PostCard key={k} data={post ?? []} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default ArticlePageView;