import Blocks from "@/common/components/blocks/Blocks";
import PostCard from "@/common/components/ui/card/post-card";
import { HomePage } from "@/common/types/pages/home.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const HomePageView = ({ page }: { page: HomePage}) => {
    return(
        <div className="bg-primary-light">
            <div className="border-b-2 border-secondary-green border-3 bg-primary py-10">
                <div className="mx-auto w-full container grid grid-cols-12 px-4 sm:px-5 py-10 pt-20">
                    <div className="col-span-12 md:col-span-10 md:col-start-2">
                        <h1 className="text-center text-black font-bold text-6xl mb-6">{page.title}</h1>
                        <p className="text-center text-black font-normal text-2xl w/3">{page.excerpt}</p>
                    </div>
                </div>
                <div className="mx-auto w-full container px-4 sm:px-5 ">
                    <div className="relative my-4 h-auto w-full max-w-full">
                        <Image 
                            src={page.mainImage ? urlFor(page.mainImage.url).url(): ""}
                            alt={page.mainImage.alt}
                            height={1300}
                            width={1700}
                            className="h-full w-full object-cover border-4 border-secondary-green"
                        />
                        <div className="stroke-none absolute -top-2 -right-2 md:-top-12 md:-right-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-none mx-auto h-14 w-14 md:h-24 lg:h-48 md:w-36 lg:w-48"  viewBox="0 0 186 186" fill="none">
                                <g clip-path="url(#clip0_199_733)">
                                    <rect x="41.5781" width="150" height="150" rx="75" transform="rotate(16 41.5781 0)" fill="#002F0C"/>
                                <g clip-path="url(#clip1_199_733)">
                                        <path d="M111.174 65.8241C116.134 69.1698 122.867 67.861 126.213 62.9008C129.559 57.9406 128.25 51.2073 123.29 47.8616C118.33 44.5159 111.596 45.8247 108.251 50.7849C104.905 55.7451 106.214 62.4784 111.174 65.8241Z" stroke="#54E240" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M111.573 47.7979C88.044 37.1543 59.9081 44.9645 45.0662 66.9685C43.4595 69.3505 42.8649 72.2731 43.4131 75.0935C43.9614 77.9139 45.6075 80.401 47.9895 82.0077C50.3715 83.6143 53.2941 84.209 56.1145 83.6607C58.9349 83.1125 61.422 81.4663 63.0287 79.0844L66.0576 74.5937C67.6643 72.2118 70.1514 70.5656 72.9718 70.0174C75.7921 69.4691 78.7148 70.0638 81.0968 71.6704C83.4788 73.2771 85.1249 75.7642 85.6731 78.5846C86.2214 81.405 85.6268 84.3276 84.0201 86.7096L71.9043 104.672C70.2976 107.054 69.703 109.977 70.2512 112.797C70.7994 115.617 72.4456 118.105 74.8276 119.711C77.2095 121.318 80.1322 121.912 82.9526 121.364C85.773 120.816 88.2601 119.17 89.8667 116.788L101.983 98.8254C103.589 96.4435 106.076 94.7973 108.897 94.2491C111.717 93.7008 114.64 94.2954 117.022 95.9021C119.404 97.5088 121.05 99.9959 121.598 102.816C122.146 105.637 121.552 108.559 119.945 110.941L116.916 115.432C115.309 117.814 114.715 120.737 115.263 123.557C115.811 126.377 117.457 128.864 119.839 130.471C122.221 132.078 125.144 132.672 127.964 132.124C130.785 131.576 133.272 129.93 134.879 127.548C149.72 105.544 146.422 76.5308 127.739 58.7022" stroke="#54E240" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M45.002 78.6865C40.8418 89.0359 40.3566 100.499 43.6272 111.163C46.8979 121.827 53.7265 131.047 62.9738 137.284C72.2211 143.521 83.3276 146.399 94.4403 145.437C105.553 144.474 115.999 139.73 124.037 131.996" stroke="#54E240" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_199_733">
                                        <rect x="41.5781" width="150" height="150" rx="75" transform="rotate(16 41.5781 0)" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_199_733">
                                        <rect width="130" height="130" fill="white" transform="translate(75.4609 2.53271) rotate(34)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
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
            </div>
    )
}

export default HomePageView;