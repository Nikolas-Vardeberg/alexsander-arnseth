import { ArticleCard } from "@/common/types/pages/article.types";
import { urlFor } from "@/sanity/lib/image";
import { toPlainText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";




const PostCard = ({ data: data }: { data: ArticleCard}) => {

    return(
        <Link href={`/artikler/${data.slug}`} className="cursor-pointer group flex flex-col h-ful group">
            <Image 
                src={data.mainImage ? urlFor(data.mainImage.url).url(): ""}
                alt={data.mainImage.alt}
                height={400}
                width={400}
                className="h-[300px] relative aspect-video overflow-hidden bg-primary w-full object-cover group-hover:border-3 border-secondary-pink"
            />
            <div className="flex-1 items-start justify-start flex-col pt-4">
                <ul className="flex items-center justify-start gap-x-1 mb-4" aria-label="Temaer:">
                    {data.tags?.map((tag, k) => (
                        <li>
                            <div className="flex w-fit flex-col rounded-full bg-primary px-2 py-1">
                                <p className="text-center text-base font-medium uppercase text-black">{tag.title}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <h4 className="mb-4 text-black font-bold text-2xl">{data.title}</h4>
                <p className="">DESCRIPTION</p>
            </div>
        </Link>
    )
}

export default PostCard;