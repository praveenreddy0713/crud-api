const serverless = require("serverless-http");
const express = require("express");
const userRoutes = require("./src/routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("User CRUD API running!"));

module.exports.app = serverless(app);