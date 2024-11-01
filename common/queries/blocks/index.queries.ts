import { groq } from "next-sanity";
import { QUOTE_QUERY } from "./quote.queries";
import { PROMOTION_QUERY } from "./promotion.queries";

export const BLOCKS_QUERY = groq`{
     _key,
    _type,
    _type == "quote" => ${QUOTE_QUERY},
    _type == "promotion" => ${PROMOTION_QUERY},
}`;