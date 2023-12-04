import meiliSearchClient from "./src/components/meilisearch/meiliSearchClient.js";


// (async function index() {
//   await meiliSearchClient.deleteIndex("Adhoc");
// })();

(async function index() {
  await meiliSearchClient.createIndex("Adhoc", {
    primaryKey: "id",
  });
})();