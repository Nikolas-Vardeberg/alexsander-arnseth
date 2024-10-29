import { Home } from "lucide-react";
import { defineType } from "sanity";
import { seo } from "../other/seo";
import { blocks } from "../blocks/blocks";

export const home = defineType({
    name: "home",
    title: "Hjemmeside",
    type: "document",
    icon: Home,
    groups: [
        {
            name: "general",
            title: "General",
            default: true,
        },
        {
            name: "seo",
            title: "SEO"
        },
        {
            name: "bottomline",
            title: "Bunnlinje"
        }
    ],
    fields: [
        {
            name: "title",
            title: "title",
            type: "string",
            group: "general"
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "string",
            group: "general"
        },
        {
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alternative Text",
                    type: "string"
                }
            ],
            group: "general",
        },
        {
            ...blocks,
            group: "general"
        },
        {
            ...seo,
            group: "seo",
        },
        {
            name: "test",
            title: "Overskriv bunnlinje",
            type: "boolean",
            initialValue: false,
            group: "bottomline"
        }
    ]
})