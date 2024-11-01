import { groq } from "next-sanity";



export const NAVIGATION_QUERY = groq`*[_type == "header"][0] {
    ...,
    links[] {
      ...,
      internalLink->{_type,slug,title}
    }
}`;

