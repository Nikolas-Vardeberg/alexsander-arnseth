import Footer from "@/common/components/global/Footer";
import Navigation from "@/common/components/global/Navigation";
import { DisableDraftMode } from "@/common/components/sanity/DisableDraftMode";
import { getGlobalData } from "@/common/lib/getGlobalData";
import GlobalDataProvider from "@/common/providers/global-data-provider";
import ReactQueryProvider from "@/common/providers/ReactQueryProvider";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";


export default async function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const data = await getGlobalData();

    return(
        <ReactQueryProvider>
            <GlobalDataProvider globalData={data}>
                <>
                    <Navigation />
                    {children}
                    <SanityLive />
                    {(await draftMode()).isEnabled && (
                            <>
                                <DisableDraftMode />
                                <VisualEditing />
                            </>
                    )}
                    <Footer />
                </>
            </GlobalDataProvider>
        </ReactQueryProvider>
    )
}
