import gql from "graphql-tag";

export const meilisearchTypeDefs = gql`
  type MeiliSearch {
    id: Int
    name: String
    age: Int
    email: String
  }
`;
