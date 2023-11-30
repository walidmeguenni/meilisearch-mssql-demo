import meiliSearchClient from "./meiliSearchClient.js";

export const meilisearch = async(args) => {
  try {
    const result = await meiliSearchClient.index('users_product').search(args)
    return result.hits
  } catch (error) {
    console.log(error);
  }
};
