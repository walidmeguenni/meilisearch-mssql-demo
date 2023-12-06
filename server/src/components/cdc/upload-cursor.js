import meiliSearchClient from "../meilisearch/meiliSearchClient.js";
import { queryDB } from "../dataBases/connect.js";
import { CustomQuery } from "./query.js";
(async () => {
  try {
    const pageSize = 1000;
    let cursor = 1;
    const pool = await queryDB();
    const request = pool.request();
    while (true) {
      const result = await request.query(CustomQuery(page, pageSize));
      if (result.recordset.length === 0) break;
      await meiliSearchClient.index("Adhoc").addDocuments(result.recordset);
      cursor++;
    }
  } catch (err) {
    console.error("Error:", err);
  }
})();
