import { meilisearch } from "./service.js"

export const meilisearchResolver = {
    Query: {
        meilisearch: async (_, args) => {
            try {
                console.log(args)
                const { word, categories } = args
                return await meilisearch(word, categories)
            } catch (error) {
               console.log(error) 
            }
        },
    }
}