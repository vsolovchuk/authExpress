const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World2!");
});

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});
