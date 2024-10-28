import { Blocks } from "../blocks/blocks.types";
import { Editor } from "../editor.types";
import { Tags } from "../tags.types";

export type ArticlePage = {
    _type: "article";
    _id: string;
    title: string;
    slug: string;
    blocks?: Blocks[];
    mainImage: any;
    editor: Editor;
    tags: Tags;
    //TODO: CREATE MAImage TYPE;
    //TODO: CREATE TAGS TYPE;
}