import { defineType } from "sanity";


export const header = defineType({
    name: "header",
    title: "Header",
    type: "document",
    fields: [
        {
            name: "name",
            title: "name",
            type: "string"
        }
    ]
})