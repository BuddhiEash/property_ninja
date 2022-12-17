"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
dotenv_1.default.config();
const query = {
    name: "fetch-apartment",
    text: "SELECT * FROM apartment WHERE id = $1",
    values: ["3a73a4e5-e9e5-4628-b928-8c580778657d"],
};
const client = new pg_1.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: 5432,
});
client.connect();
// promise
client
    .query(query)
    .then((res) => console.log(res.rows[0].name))
    .catch((e) => console.error(e.stack));
app.get("/", (req, res) => {
    res.send("Node, Typescript and Express server");
});
app.listen(3000, () => {
    console.log("The application is listening on port 3000!");
});
