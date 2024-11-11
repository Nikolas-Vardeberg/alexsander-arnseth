import { getTransportPageQuery } from "@/common/queries/pages/transport-page.queries";
import TransportPageView from "@/common/views/transport-page/transport-page-view";
import { sanityFetch } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    }
}

export default async function TransportPage({ params }: Props) {
    const data = await sanityFetch({
        query: getTransportPageQuery,
        params,
    });

    if (!data) return notFound();

    return(
        <>
            <TransportPageView data={data} />
        </>
    )
}