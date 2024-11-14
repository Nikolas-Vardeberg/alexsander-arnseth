import { defineArrayMember, defineField } from "sanity";
import { quote } from "./quote";
import { promotion } from "./promotion";
import { transportBlocks } from "./transport-blocks";


export const blocks = defineField({
    name: "blocks",
    type: "array",
    title: "Blocks",
    of: [   
        quote,
        promotion,
        transportBlocks
    ]
})