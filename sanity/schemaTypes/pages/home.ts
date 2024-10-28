import { Home } from "lucide-react";
import { defineType } from "sanity";

export const home = defineType({
    name: "home",
    title: "Hjemmeside",
    type: "document",
    icon: Home,
    fields: [
        {
            name: "hero",
            title: "Hero",
            type: "object",
            fields: [
                {
                    name: "title",
                    title: "title",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "string",
                },
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                    options: {
                        hotspot: true,
                    }
                }
            ]
        }
    ]
})