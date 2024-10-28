import { defineType } from "sanity";


export const footer = defineType({
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
        {
            name: "name",
            title: "name",
            type: "string"
        }
    ]
})