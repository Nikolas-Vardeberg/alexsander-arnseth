import { defineType } from "sanity";
import { Folder } from "lucide-react";
import { blocks } from "../blocks/blocks";
import { seo } from "../other/seo";



export const TransportPage = defineType({
    name: "transportPage",
    type: "document",
    title: "Transport Sider",
    icon: Folder,
    groups: [
        {
            name: "general",
            title: "General",
            default: true,
        },
        {
            name: "seo",
            title: "SEO",
        }
    ],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            group: "general",
        },
        {
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
            },
            group: "general",
        },
        {
            name: "excerpt",
            type: "text",
            title: "Excerpt",
            group: "general"
        },
        {
            ...blocks,
            group: "general",
        },
        {
            ...seo,
            group: "seo"
        }
    ]
})