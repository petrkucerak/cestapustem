import { z, defineCollection } from "astro:content";

const denCollection = defineCollection({
  type: "content",
  schema: z.object({
    dayName: z.string(),
    imgPath: z.string(),
    imgAlt: z.string(),
    date: z.string().date(),
    author: z.string(),
    authorDetails: z.string(),
    bibleQuote: z.string(),
    source: z.string(),
    prayer: z.string(),
    challenge: z.string(),
  }),
});

const sundayCollection = defineCollection({
  type: "content",
  schema: z.object({
    dayName: z.string(),
    imgPath: z.string(),
    imgAlt: z.string(),
    startDate: z.string(),
    imagePositionY: z.number(),
  }),
});

export const collections = {
  den: denCollection,
  setkani: sundayCollection,
};
