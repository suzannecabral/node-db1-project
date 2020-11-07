const express = require("express");
const budgetRouter = require('../budget/budgetRouter');

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use('/api/budgets', budgetRouter);


server.get('/', (req,res)=>{
  res.status(200).json({message:'The server is running, better go catch it'});
});

module.exports = server;
