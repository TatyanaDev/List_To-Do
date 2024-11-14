const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler.mw");
const router = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

module.exports = app;
