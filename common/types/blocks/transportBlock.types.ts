import { PageReference } from "../root.types";

export type TransportBlock = {
    _key: any;
    _type: "transportBlocks",
    variant: TransportBlockVariant;
    flipHorizontal?: boolean;
    title?: string;
    moreLinkTitle?: string;
    moreLink: any; //TODO: MADE A CUSTOM TYPE
    options?: TransportBlockOptions;
    pages: PageReference[];
} 

export type TransportBlockVariant = "default" | "lv" | "lh" | "sh" | "ss";

export type TransportBlockOptions = {
    hideLabel: boolean;
    hideTags: boolean;
};
