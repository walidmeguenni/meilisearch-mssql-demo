import { meilisearch } from "./service.js"

export const meilisearchResolver = {
    Query: {
        meilisearch: async (_, args) => {
            try {
                const { word } = args
                return await meilisearch(word)
            } catch (error) {
               console.log(error) 
            }
        },
    }
}