import express from "express";
import { queryReturnedVal } from "./pgsql";

const app = express();

app.get("/", (req, res) => {
  res.send(`Browser loaded. DB value ${queryReturnedVal}`);
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});
