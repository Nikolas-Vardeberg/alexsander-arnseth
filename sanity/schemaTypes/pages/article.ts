import { defineType } from "sanity";
import { seo } from "../other/seo";
import { Newspaper } from "lucide-react";
import { blocks } from "../blocks/blocks";
import { tags } from "../other/tags";

export const article = defineType({
    type: "document",
    name: "article",
    title: "Article",
    icon: Newspaper,
    groups: [
        {
            name: "general",
            title: "General",
            default: true,
        },
        {
            name: "byline",
            title: "Byline",
        },
        {
            name: "seo",
            title: "SEO",
        },
    ],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            group: "general",
        },
        {
            name: "mainImage",
            type: "image",
            title: "Main image",
            description: "The main image of the article",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
            group: "general",
        },
        {
            name: "slug",
            type: "slug",
            options: {
                source: 'title',
            },
            group: "general",
        },
        {
            name: "tags",
            type: "array",
            of: [{ type: "reference", to: [{type: "tags"}]}],
            group: "byline",
        },  
        {
            name: "publishedAt",
            type: "datetime",
            title: "Pulisert",
            description: "Dato for publisering av artikkelen",
            group: "byline",
            initialValue: new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        },  
        {
            ...seo,
            group: "seo",
        },
        {
            ...blocks,
            group: "general",
        },
        {
            name: "editor",
            type: "reference",
            to: [{ type: "editor" }],
            group: "byline"
        }
    ],
    orderings: [
        {
            title: "Publiseringsdato (nyeste først)",
            name: "publishDateDesc",
            by: [{ field: "publishedAt", direction: 'desc'}],
        },
        {
            title: "Publiseringsdato (eldste først)",
            name: "publishDateAsc",
            by: [{ field: "publishedAt", direction: "asc"}],
        },
        {
            title: "Tittel (A-Å)",
            name: "titleAsc",
            by: [{ field: "title", direction: "asc"}],
        },
        {
            title: "Tittel (A-Å)",
            name: "titleDesc",
            by: [{ field: 'title', direction: "asc"}],
        }
    ]
})