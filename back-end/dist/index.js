"use strict";
const { Pool, Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const query = {
    // give the query a unique name
    name: 'fetch-apartment',
    text: 'SELECT * FROM apartment WHERE id = $1',
    values: ['3a73a4e5-e9e5-4628-b928-8c580778657d'],
};
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
client.connect();
// promise
client
    .query(query)
    .then((res) => console.log(res.rows[0].name))
    .catch((e) => console.error(e.stack));
