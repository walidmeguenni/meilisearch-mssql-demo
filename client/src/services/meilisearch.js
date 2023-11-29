import { gql } from "graphql-tag";

export const MEILISEARCH = gql`
  query Query($word: String) {
    meilisearch(word: $word) {
      id
      firstname
      lastname
      age
      email
      phone
      job
      salary
      gender
      createdAt
      updatedAt
    }
  }
`;
