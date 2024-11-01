import { defineType } from "sanity";


export const header = defineType({
    name: "header",
    title: "Header",
    type: "document",
    fields: [
        {
            name: "links",
            title: "Lenker",
            type: "array",
            of: [
                {
                    name: "link",
                    title: "Lenke",
                    type: "link",
                    options: {
                        enableText: true,
                    },
                }
            ]
        }
    ]
})