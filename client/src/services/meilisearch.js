import { gql } from "graphql-tag";

export const MEILISEARCH = gql`
  query Query($word: String) {
    meilisearch(word: $word) {
      id
      name
      age
      email
    }
  }
`;
