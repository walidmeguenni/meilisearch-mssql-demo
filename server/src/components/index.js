import { meilisearchResolver, meilisearchSchema, meilisearchTypeDefs } from './meilisearch/index.js'

export const typeDefs = [meilisearchSchema, meilisearchTypeDefs]
export const resolvers = [meilisearchResolver]