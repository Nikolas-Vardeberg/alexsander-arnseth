import { IPromotion } from "@/common/types/blocks/promotion.types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import {default as NextLink} from 'next/link'
import {Link} from 'sanity-plugin-link-field/component'

const Promotion = ({ _type, title, excerpt, image, link }: IPromotion) => {
    return(
        <div className="grid list-none gap-5 md:gap-y-12 my-10">
            <div className="flex w-full flex-col overflow-hidden rounded-lg border-2 border-secondary-green md:grid md:grid-cols-4">
                <div className="w-full bg-variant-light dark:bg-variant-dark md:col-span-2">
                    <Image
                        src={image ? urlFor(image.url).url(): ""}
                        alt={image.alt}
                        width={700}
                        height={400}
                        className="h-full lg:h-[500px] w-full object-cover"
                    />
                </div>
                <div className="bg-primary relative w-full px-6 py-6 md:col-span-2">
                    <div className="flex flex-col justify-center h-full">
                        <div className="mb-6 flex items-center justify-start text-2xl  lg:text-4xl font-semibold">
                            {title}
                        </div>
                        <p className="text-base lg:text-xl mb-7">
                            {excerpt}
                        </p>

                        <Link link={link} as={NextLink}  className="min-w-fit hover:shadow-lg uppercase bg-primary-dark text-white px-2 py-1 rounded-full max-w-fit border-none hover:bg-secondary-pink hover:text-black duration-300 transition-all">
                            {link.text}
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion