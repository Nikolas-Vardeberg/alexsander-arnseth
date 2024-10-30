import Blocks from "@/common/components/blocks/Blocks";
import PortableText from "@/common/components/PortableText";
import { ArticlePage } from "@/common/types/pages/article.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const ArticlePageView = ({ data: page }: { data: ArticlePage }) => {
    console.log(page.mainImage.url)

    return(
        <>
            <div className="py-8 bg-primary-light">
                <div className="mx-auto w-full container px-4 sm:px-5 flex flex-col gap-6">
                    <h1 className="text-black !font-bold text-3xl">{page.title}</h1>
                    
                    <Image
                        src={page.mainImage ? urlFor(page.mainImage.url).url(): ""}
                        alt={page.mainImage.alt}
                        height={600}
                        width={600}
                    />

                    <PortableText value={page.body} />
                </div>
                <Blocks blocks={page.blocks ?? []} />
                <div className="mx-auto w-full container px-4 sm:px-5 flex flex-col gap-8">
                    <h3 className="text-black !font-semibold text-2xl">Les flere deilige blogger!!</h3>

                    {page.related?.map((post, i) => (
                        <div key={i}>
                            {post.title}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ArticlePageView;