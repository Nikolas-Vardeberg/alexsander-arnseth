import { HandHelping, MessageSquareQuote } from "lucide-react";
import { defineType } from "sanity";


export const promotion = defineType({
    name: "promotion",
    title: "Promotion",
    type: "object",
    icon: HandHelping,
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: "alt",
                    title: "Alternative Text",
                    type: "string"
                }
            ],
        },
        {
            name: "imageOnLeft",
            title: "Bilde på Venstre",
            type: "boolean",
            initialValue: true,
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "string",
        },
        {
            name: "link",
            title: "CTA",
            type: "link",
            options: {
                enableText: true,
            },
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
            excerpt: "excerpt",
        },
        prepare(selection) {
            const { title, media, excerpt } = selection;
            return {
                title: title,
                media,
                subtitle: excerpt,
            }
        }
    }
})