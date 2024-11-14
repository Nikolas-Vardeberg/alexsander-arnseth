import { groq } from "next-sanity";
import { IMAGE_QUERY } from "./image.queries";
import { TAG_QUERY } from "./tag.queries";

export const PAGE_REFERENCE_QUERY = groq`{
    _id,
    title,
    _type,
    _createdAt,
    mainImage ${IMAGE_QUERY},
    seo,
    "slug": coalesce(slug.current, "page-not-found"), 
    tags[]->${TAG_QUERY},
    publishedAt,
}`;

//"teaser": ${TEASER_QUERY},