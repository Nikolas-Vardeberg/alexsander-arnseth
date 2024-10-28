"use client"
import Blocks from "@/common/components/blocks/Blocks"
import PageHeader from "@/common/components/page-header/page-header"
import { TransportPage } from "@/common/types/pages/transport-page.types"

const TransportPageView = ({ data: page }: { data: TransportPage }) => {
    return(
        <div>
            <PageHeader title={page.title} excerpt={page.excerpt} />

            <Blocks blocks={page.blocks ?? []} />
        </div>
    )
}

export default TransportPageView