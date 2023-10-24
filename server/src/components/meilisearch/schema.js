import gql from 'graphql-tag'

export const meilisearchSchema = gql`
    type Query {
        meilisearch: [MeiliSearch]
    }
    `