const express = require("express");
const weaponsRouter = require("./routes/weapons");

const app = express();
app.use(express.json());