import { groq } from "next-sanity";
import { seo } from "./seo.queries";
import { BLOCKS_QUERY } from "../blocks/index.queries";
import { ARTICLE_QUERY_RAW } from "./article.queries";


export const HOMEPAGE_QUERY = groq`*[_type == "home"][0]{
    title,
    excerpt,
    mainImage {
        "url": asset -> url,
        alt,
    },
    "blocks": blocks[]${BLOCKS_QUERY},
    "latestArticle": *[_type == "article" && publishedAt < now()] | order(publishedAt desc) [0...3]${ARTICLE_QUERY_RAW},
    ${seo},
}`