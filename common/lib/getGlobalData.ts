import { sanityFetch } from "@/sanity/lib/client"
import { GlobalData } from "../types/global-data.types"
import { NAVIGATION_QUERY } from "../queries/navigation.queries"

export const getGlobalData = async (): Promise<GlobalData> => {
    /*
    example of fetching data from Sanity
    const navbar = await client.fetch(`*[_type == "navbar"][0]`);
    */

    const navbar = await sanityFetch({
        query: NAVIGATION_QUERY,
    });

    return {
        navbar: navbar,
    }
}