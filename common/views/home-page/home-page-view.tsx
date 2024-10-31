import Blocks from "@/common/components/blocks/Blocks";
import PostCard from "@/common/components/ui/card/post-card";
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

            {page.latestArticle && page.latestArticle.length > 0 && (
                <div className="mx-auto container px-4 sm:px-5 flex flex-col py-10">
                    <div className="mx-auto w-full grid grid-cols-12">
                        <div className="col-span-12 md:col-span-10">
                            <h3 className="text-start text-black !font-semibold text-3xl">Les våre deilige blogger!!</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8 mt-8">
                        {page.latestArticle.map((post, k) => (
                            <PostCard key={k} data={post ?? []} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default HomePageView;