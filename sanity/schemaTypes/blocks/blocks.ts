import { defineArrayMember, defineField } from "sanity";
import { quote } from "./quote";
import { promotion } from "./promotion";


export const blocks = defineField({
    name: "blocks",
    type: "array",
    title: "Blocks",
    of: [   
        quote,
        promotion,
    ]
})