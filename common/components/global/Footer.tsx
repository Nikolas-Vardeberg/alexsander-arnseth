"use client"

import { useGlobalData } from "@/common/providers/global-data-provider";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
    const data = useGlobalData();

    const socialLinks = [
        { url: data.footer.facebookURL, label: "Facebook", icon: <FaFacebook className="size-8" /> },
        { url: data.footer.instagramURL, label: "Instagram", icon: <FaInstagram className="size-8" /> },
        { url: data.footer.tiktokURL, label: "Tiktok", icon: <FaTiktok className="size-8" /> },
    ];

    return(
        <footer className="bg-primary-dark border-t-4 border-secondary-green py-10">
                <div className="mx-auto container w-full grid grid-cols-12 px-4 sm:px-5 items-center ">
                    <div className="col-span-12 md:col-span-10 md:col-start-2 ">
                        <div className="flex gap-x-6 w-full mb-12 items-center justify-center">

                        {socialLinks.map(
                            (link, index) =>
                                link.url && (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className="text-xl text-secondary-green inline-block hover:underline hover:bg-green-900"
                                    >
                                        <div className="flex h-16 items-center justify-center">
                                            {link.icon}
                                        </div>
                                        <p>{link.label}</p>
                                    </Link>
                                )
                        )}

                        </div>

                        <p className="text-center uppercase text-secondary-green text-lg font-normal">&copy; Copyright {new Date().getFullYear()}. Laget av Vertio Webdesign</p>
                    </div>
                </div>
        </footer>
    )
}