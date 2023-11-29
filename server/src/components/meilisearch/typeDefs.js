import gql from "graphql-tag";

export const meilisearchTypeDefs = gql`
  type MeiliSearch {
    id: Int
    firstname: String
    lastname: String
    age: Int
    email: String
    phone: String
    job: String
    salary: Int
    gender: String
    createdAt: String
    updatedAt: String
  }
`;
