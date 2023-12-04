import meiliSearchClient from "./meiliSearchClient.js";
import { queryDB } from "../dataBases/connect.js";
import { CustomQuery } from "../cdc/query.js";

let perv_index = 0;
let haschecked = false;

const Interval_cdc = setInterval(async () => {
  if (!haschecked) {
    perv_index = await meiliSearchClient
      .index("Adhoc")
      .getStats()
      .then((stats) => stats.numberOfDocuments);
    haschecked = true;
  }
  const pool = await queryDB();
  const request = pool.request();
  const current_count = await request.query("SELECT count (*) FROM Responses");
  console.log('couter ', current_count)
  const current_index = current_count.recordset[0][""];
  if (current_index > perv_index) {
    const result = (
      await pool.request().query(CustomQuery + perv_index)
    ).recordset;
    await meiliSearchClient.index("Adhoc").addDocuments(result);
    console.log(" new data added to users index", Date.now());
    perv_index = current_index;
  }
}, 1000);

export const startCDC = () => {
  return Interval_cdc;
};
