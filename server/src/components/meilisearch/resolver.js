import { meilisearch } from "./service.js"

export const meilisearchResolver = {
    Query: {
        meilisearch: async (_, args) => {
            try {
                return  meilisearch(args)
            } catch (error) {
               console.log(error) 
            }
            
        },
    }
}