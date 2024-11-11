import { groq } from "next-sanity";



export const FOOTER_QUERY = groq`*[_type == "footer"][0] {
    facebookURL,
    instagramURL,
    tiktokURL,
}`