import { groq } from "next-sanity"



export const EDITOR_QUERY = groq`{
    _id,
    name,
    title,
    image {
        "url": asset -> url,
        alt,
    },
}`;