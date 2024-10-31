import { Blocks } from "../blocks/blocks.types";
import { Editor } from "../editor.types";
import { SanityBlockContent } from "../root.types";
import { Tags } from "../tags.types";
import { SeoType } from "./seo.types";

export type ArticlePage = {
    _type: "article";
    _id: string;
    title: string;
    slug: string;
    blocks?: Blocks[];
    mainImage: any;
    editor: Editor;
    tags: Tags[]; 
    body?: SanityBlockContent;
    seo: SeoType,
    related: ArticleCard[];
    //CREATE: RELATED TYPE
    //TODO: CREATE MAImage TYPE;
}

export type ArticleCard = {
    _type: "article";
    _id: string;
    title: string;
    slug: string;
    mainImage: any;
    tags: Tags[];
    body: SanityBlockContent;
}