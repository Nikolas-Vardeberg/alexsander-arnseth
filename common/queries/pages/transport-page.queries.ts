import { groq } from "next-sanity";
import { BLOCKS_QUERY } from "../blocks/index.queries";
import { seo } from "./seo.queries";

export const getTransportPageQuery = groq`*[_type == "transportPage" && slug.current == $slug][0]{
    _id,
    title,
    mainImage -> {
        "url": asset->url,
    },
    "slug": slug.current,
    excerpt,
    "blocks": blocks[]${BLOCKS_QUERY},
    ${seo},
}`;