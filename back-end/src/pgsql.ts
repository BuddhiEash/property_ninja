import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();

const query = {
  name: "fetch-apartment",
  text: "SELECT * FROM apartment WHERE id = $1",
  values: ["3a73a4e5-e9e5-4628-b928-8c580778657d"],
};
export const dbConn = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: 5432,
});
dbConn.connect();

// promise

dbConn
  .query(query)
  .then((res: any) => console.log(res.rows[0].name))
  .catch((e: any) => console.error(e.stack));
