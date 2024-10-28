import { groq } from "next-sanity";
import { EDITOR_QUERY } from "../editor.queries";


export const QUOTE_QUERY = groq`{
    quote,
    "editor": editor->${EDITOR_QUERY},
}`;