import { groq } from "next-sanity";
import { QUOTE_QUERY } from "./quote.queries";
import { PROMOTION_QUERY } from "./promotion.queries";
import { TRANSPORT_BLOCKS_QUERIES } from "./transport-blocks.queries";

export const BLOCKS_QUERY = groq`{
     _key,
    _type,
    _type == "quote" => ${QUOTE_QUERY},
    _type == "promotion" => ${PROMOTION_QUERY},
    _type == "transportBlocks" => ${TRANSPORT_BLOCKS_QUERIES},
}`;