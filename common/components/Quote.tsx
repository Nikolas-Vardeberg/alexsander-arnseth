import Image from "next/image"
import { IQuote } from "../types/blocks/quote.types"
import { urlFor } from "@/sanity/lib/image"
import { ChefHat } from "lucide-react"



const Quote = ({ _type, editor, quote }: IQuote) => {
    return(
        <div className="border-y border-secondary-green bg-primary py-6 grid grid-cols-12 ">
            <div className="mx-auto w-full container px-4 sm:px-5 col-span-12 md:col-span-10 md:col-start-2">
                <figure className="col-span-10 sm:col-span-8 sm:col-start-2 flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
                    <div className="flex items-center justify-end">
                        <div className="shrink-0 relative mb-4 h-48 w-48 lg:h-72 lg:w-72">
                            <Image 
                                src={editor.image? urlFor(editor.image.url).url() : ""}
                                alt={editor.image.alt}
                                height={288}
                                width={288}
                                className="h-48 w-48 rounded-full border-4 object-cover lg:h-72 lg:w-72 border-secondary-pink"
                            />
                            <div className="stroke-none p-3 absolute bottom-0 right-0 h-14 w-14 sm:h-20 sm:w-20 text-black bg-secondary-pink rounded-full items-center justify-center flex">
                                <ChefHat className="h-8 w-8" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center gap-6 w-full sm:w-2/3 sm:text-left">
                        <p className="!font-semibold text-black text-3xl lg:text-4xl xl:text-5xl w-3/4">&quot;{quote}&quot;</p>
                        {editor && (
                            <div className="flex flex-row gap-x-1 text-base sm:text-lg">
                                <p>
                                    <i>{editor.title}</i>
                                </p>
                                <p>
                                    <i>{editor.name}</i>
                                </p>
                            </div>
                        )}
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default Quote