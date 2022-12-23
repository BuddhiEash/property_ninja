"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pgsql_1 = require("./pgsql");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send(`Browser loaded. DB value ${pgsql_1.queryReturnedVal}`);
});
app.listen(3000, () => {
    console.log("The application is listening on port 3000!");
});
