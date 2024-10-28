import { Editor } from "../editor.types";

export type IQuote = {
    _key: any;
    _type: "quote",
    editor: Editor;
    quote: string;
}