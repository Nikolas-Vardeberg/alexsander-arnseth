"use client"
import { sanityFetch } from "@/sanity/lib/client"
import { NAVIGATION_QUERY } from "../../queries/navigation.queries"
import {default as NextLink} from 'next/link'
import {Link} from 'sanity-plugin-link-field/component'
import { useGlobalData } from "@/common/providers/global-data-provider"

export default function Navigation() {
    const data = useGlobalData();

    return(
        <header className="relative z-20 flex flex-col items-center justify-center">
            <div className="flex w-full justify-end bg-primary-dark">
                <div className="mx-auto container w-full grid grid-cols-12 px-4 sm:px-5 items-center ">
                    <div className="col-span-12 md:col-span-10 md:col-start-2 ">
                        <div className="flex w-full items-center justify-between">
                            <a href="/" className="flex items-center justify-start text-sm  text-secondary-green uppercase md:text-lg hover:underline">
                                Hjem
                            </a>

                            <ul className="flex w-full items-center justify-end gap-x-2 sm:gap-x-5 text-secondary-green" aria-label="snarveier">
                                {data.navbar.links?.map((link, k) => (
                                    <Link link={link} key={k} className="group py-2 md:py-4 text-sm md:text-lg uppercase hover:underline">
                                        {link.text}
                                    </Link>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </header>
      
    )
}