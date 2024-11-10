import { GlobalData } from "../types/global-data.types"

export const getGlobalData = async (): Promise<GlobalData> => {
    /*
    example of fetching data from Sanity
    const navbar = await client.fetch(`*[_type == "navbar"][0]`);
    */

    return {
        example: "example",
    }
}