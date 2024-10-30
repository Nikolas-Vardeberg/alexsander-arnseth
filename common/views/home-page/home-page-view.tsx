import Blocks from "@/common/components/blocks/Blocks";
import { HomePage } from "@/common/types/pages/home.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const HomePageView = ({ page }: { page: HomePage}) => {
    return(
        <>
            <div className="border-b border-secondary-green border-3 bg-primary">
                <div className="mx-auto w-full container grid grid-cols-12 px-4 sm:px-5 py-10 pt-20">
                    <div className="col-span-12 md:col-span-10 md:col-start-2">
                        <h1 className="text-center text-black font-bold text-4xl mb-6">{page.title}</h1>
                        <p className="text-center text-black font-normal">{page.excerpt}</p>
                    </div>
                   

                </div>
                <div className="mx-auto w-full container px-4 sm:px-5 ">
                    <div className="relative my-4 h-auto w-full max-w-full">
                        <Image 
                            src={page.mainImage ? urlFor(page.mainImage.url).url(): ""}
                            alt={page.mainImage.alt}
                            height={800}
                            width={800}
                            className="aspect-video h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <Blocks blocks={page.blocks ?? []} />

            {page.latestArticle && (
                <div>
                    {page.latestArticle.map((post, k) => (
                        <pre>
                            {JSON.stringify(post, undefined, 2)}
                        </pre>
                    ))}
                </div>
            )}
        </>
    )
}

export default HomePageView;