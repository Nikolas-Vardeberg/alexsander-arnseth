import { SeoType } from "./pages/seo.types";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type SanityBlockContent = any[];

export type PageReference = {
    _ref: string;
    _id: string;
    _type: "article" | "transportPage";
    id: string;
    title: string;
    slug: string;
    mainImage: any; //TODO: MAKE TYPE
    tags: any[]; //TODO: MAKE TYPE
    seo: SeoType;
}