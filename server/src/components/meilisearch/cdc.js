import meiliSearchClient from "./meiliSearchClient.js";
import { queryDB } from "../dataBases/connect.js";

let perv_index = 0;
let haschecked = false;

const Interval_cdc = setInterval(async () => {
  if (!haschecked) {
    perv_index = await meiliSearchClient
      .index("users_product")
      .getStats()
      .then((stats) => stats.numberOfDocuments);
    haschecked = true;
  }
  const pool = await queryDB();
  const request = pool.request();
  const current_count = await request.query("SELECT count (*) FROM users");
  const current_index = current_count.recordset[0][""];
  if (current_index > perv_index) {
    const result = (
      await pool.request().query("SELECT u.*, p.product_name, p.price FROM users u INNER JOIN product p ON p.user_id = u.id where u.id > " + perv_index)
    ).recordset;
    await meiliSearchClient.index("users_product").addDocuments(result);
    console.log(" new data added to users index", Date.now());
    perv_index = current_index;
  }
}, 1000);

export const startCDC = () => {
  return Interval_cdc;
};
