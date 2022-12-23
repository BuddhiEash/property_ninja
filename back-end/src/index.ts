import express from "express";
import { dbConn } from "./pgsql";

const app = express();

app.get("/", (req, res) => {
  res.send('Browser loaded...');
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});
