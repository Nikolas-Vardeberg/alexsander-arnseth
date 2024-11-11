import { defineType } from "sanity";


export const footer = defineType({
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
        {
            name: 'facebookURL',
            type: 'url',
            title: 'Facebook URL',
            description: 'Lenke til din Facebook side'
          },
          {
            name: 'instagramURL',
            type: 'url',
            title: 'Instagram URL',
            description: 'Lenke til din Instagram side'
          },
          {
            name: 'tiktokURL',
            type: 'url',
            title: 'Tiktok URL',
            description: 'Lenke til din TikTok side'
          },
    ]
})