import { Blocks } from "../blocks/blocks.types";
import { ArticleCard } from "./article.types";
import { SeoType } from "./seo.types";


export type HomePage = {
    _type: "article";
    _id: string;
    title: string;
    excerpt: string;
    blocks?: Blocks[];
    mainImage: any;
    seo: SeoType,
    latestArticle: ArticleCard[];
    //TODO: MAImage type
}