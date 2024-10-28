import { Blocks } from "../blocks/blocks.types";
import { Editor } from "../editor.types";

export type ArticlePage = {
    _type: "article";
    _id: string;
    title: string;
    slug: string;
    blocks?: Blocks[];
    mainImage: any;
    editor: Editor;
    tags: any;
    //TODO: CREATE MAImage TYPE;
    //TODO: CREATE TAGS TYPE;
}