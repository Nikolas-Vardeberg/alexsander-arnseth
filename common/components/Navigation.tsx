import Link from "next/link";



export default async function Navigation() {
    return(
        <header className="relative z-20 flex flex-col items-center justify-center ">
            <div className="flex w-full justify-end bg-primary-dark">
                <div className="mx-auto container w-full grid grid-cols-12 px-4 sm:px-5 items-center ">
                    <div className="col-span-12 md:col-span-10 md:col-start-2 ">
                        <ul className="flex w-full items-center justify-end gap-x-2 sm:gap-x-5 text-secondary-green" aria-label="snarveier">
                            <li className="group py-2 md:py-4">
                                BESTILL KAKE
                            </li>
                            <li className="group py-2 md:py-4">
                                BESTILL KAKE
                            </li>
                            <li className="group py-2 md:py-4">
                                BESTILL KAKE
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}