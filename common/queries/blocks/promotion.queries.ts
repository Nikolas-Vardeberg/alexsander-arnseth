import { groq } from "next-sanity";
import { EDITOR_QUERY } from "../editor.queries";


export const PROMOTION_QUERY = groq`{
    title,
    excerpt,
    image {
        "url": asset -> url,
        alt,
    },
    link {
    ...,
    internalLink->{_type,slug,title}
  },
}`;