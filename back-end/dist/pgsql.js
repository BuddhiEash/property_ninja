"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const query = {
    name: "fetch-apartment",
    text: "SELECT * FROM apartment WHERE id = $1",
    values: ["3a73a4e5-e9e5-4628-b928-8c580778657d"],
};
exports.client = new pg_1.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: 5432,
});
exports.client.connect();
// promise
exports.client
    .query(query)
    .then((res) => console.log(res.rows[0].name))
    .catch((e) => console.error(e.stack));
