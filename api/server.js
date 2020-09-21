const express = require("express");

//const budgetRouter = require('../budget/budget-router')

const server = express();

server.use(express.json());

//server.use("/api/budgets", budgetRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "server up and running" })
})

module.exports = server;
