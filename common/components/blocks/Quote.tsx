import Image from "next/image"
import { IQuote } from "../../types/blocks/quote.types"
import { urlFor } from "@/sanity/lib/image"
import { ChefHat } from "lucide-react"



const Quote = ({ _type, editor, quote }: IQuote) => {
    return(
        <div className="border-y-2 border-secondary-green bg-primary py-6 grid grid-cols-12 ">
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
                            <div className="stroke-none absolute bottom-0 right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 sm:h-20 sm:w-20"  height="120" width="120" viewBox="0 0 112 112" fill="none">
                                    <g clipPath="url(#clip0_2_37)">
                                        <rect x="0.278809" y="12.4662" width="100" height="100" rx="50" transform="rotate(-7 0.278809 12.4662)" fill="#FB84FD"/>
                                        <path d="M76.4332 84.2342C77.3326 84.1237 78.1513 83.6605 78.7092 82.9465C79.2671 82.2324 79.5184 81.326 79.408 80.4266L77.1803 62.2836C76.9901 60.7339 77.9005 59.2899 79.2123 58.4507C81.9291 56.7197 83.9471 54.0847 84.9102 51.0106C85.8733 47.9366 85.7195 44.6211 84.4761 41.6494C83.2326 38.6777 80.9794 36.2407 78.1141 34.7686C75.2487 33.2965 71.9555 32.8838 68.8155 33.6035C67.1319 30.7197 64.64 28.3926 61.6479 26.9098C58.6559 25.4271 55.2949 24.8538 51.9805 25.2607C48.6662 25.6677 45.5437 27.0371 42.9993 29.1996C40.4548 31.3621 38.5999 34.223 37.6639 37.4284C34.4448 37.4919 31.3515 38.6899 28.9294 40.8111C26.5072 42.9324 24.9117 45.8407 24.4243 49.0233C23.9368 52.2059 24.5887 55.4585 26.2649 58.2074C27.9412 60.9564 30.5341 63.0253 33.5867 64.0494C35.0629 64.5497 36.2957 65.7305 36.4855 67.2769L38.7136 85.4232C38.824 86.3226 39.2872 87.1413 40.0013 87.6992C40.7154 88.2571 41.6218 88.5085 42.5212 88.398L76.4332 84.2342Z" stroke="#AF00B2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M37.7344 75.4543L78.4288 70.4577" stroke="#AF00B2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                <defs>
                                    <clipPath id="clip0_2_37">
                                        <rect x="0.278809" y="12.4662" width="100" height="100" rx="50" transform="rotate(-7 0.278809 12.4662)" fill="white"/>
                                    </clipPath>
                                </defs>
                                </svg>
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