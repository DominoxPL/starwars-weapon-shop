const express = require("express");
const weaponsRouter = require("./routes/weapons");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", shop: "Galactic Weapon Shop" });
});

app.use("/weapons", weaponsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

module.exports = app;