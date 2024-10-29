// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const gamesCollection = defineCollection({
    type: 'content', // markdown
    schema: z.object({
        title: z.string(),
        genres: z.array(z.string()), 
        developers: z.array(z.string()), 
        url: z.string().optional(),
        image: z.string().optional(),
        youtubeVideo: z.string().optional(),
    }),
 });
const developersCollection = defineCollection({
    type: 'content', // markdown
    schema: z.object({
        name: z.string(),
        twitter: z.string().optional(),
        itchio: z.string().optional(),
        site: z.string().optional(),
        youtube: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'games': gamesCollection,
  'developers': developersCollection,
};
