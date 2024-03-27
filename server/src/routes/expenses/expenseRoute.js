const express = require('express');
const { createExpCrtl, fetchAllExpCtrl, fetchExpDetailCtrl, updateExpCtrl, deleteExpCtrl} = require('../../controllers/expenses/expenseCtrl');

const expenseRoute = express.Router();

expenseRoute.post("/", createExpCrtl);
expenseRoute.get("/", fetchAllExpCtrl);
expenseRoute.get("/:id", fetchExpDetailCtrl);
expenseRoute.put("/:id", updateExpCtrl);
expenseRoute.delete("/:id", deleteExpCtrl);

module.exports = expenseRoute;