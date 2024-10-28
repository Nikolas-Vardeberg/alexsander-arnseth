import { UserRound } from "lucide-react";
import { defineField } from "sanity";


export const editor = defineField({
    name: "editor",
    title: "Agenter",
    type: "document",
    icon: UserRound,
    fields: [
        {
            name: "name",
            title: "Navn på Redaktør",
            type: "string",
        },
        {
            name: "title",
            title: "Stilling på Redaktør",
            type: "string",
        },
        {
            name: "image",
            title: "Bilde av Redaktør",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                },
            ],
        },
    ],
});