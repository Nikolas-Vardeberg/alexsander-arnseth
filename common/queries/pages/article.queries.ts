import { groq } from "next-sanity";
import { BLOCKS_QUERY } from "../blocks/index.queries";
import { EDITOR_QUERY } from "../editor.queries";


export const ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    mainImage {
        "url": asset -> url,
        alt,
    },
    publishedAt,
    tags[]->{
        "slug": slug.current,
        title,
    },
    "slug": slug.current,
    "blocks": blocks[]${BLOCKS_QUERY},
    "editor": editor->${EDITOR_QUERY},
    "related": *[_type == "article" && (!defined($slug) || slug.current != $slug) && count((tags[]._ref)[@ in ^.tags[]._ref]) > 0]{
            _id,
            _type,
            "slug": slug.current,
            title,
            tags[]->{
                _id,
                title,
                "slug": slug.current,
            },
            "tagCount": count((tags[]._ref)[@ in ^.tags[]._ref]),
        }| order(tagCount desc, _createdAt desc) [0...3],
    seo,
}`