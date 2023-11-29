import meiliSearchClient from "./src/components/meilisearch/meiliSearchClient.js";

(async function index() {
  await meiliSearchClient.createIndex('users_product',{
    primaryKey: "id"
  });
})();
