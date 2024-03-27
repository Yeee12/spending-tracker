const express = require('express');
const { createIncCrtl, fetchAllIncCtrl, fetchIncDetailCtrl, updateIncCtrl, deleteIncCtrl} = require('../../controllers/income/incomeCtrl');
const authMiddleware = require('../../middlewares/authMiddlewares');

const incomeRoute = express.Router();

incomeRoute.post("/",authMiddleware, createIncCrtl);
incomeRoute.get("/", authMiddleware,fetchAllIncCtrl);
incomeRoute.get("/:id", authMiddleware, fetchIncDetailCtrl);
incomeRoute.put("/:id", authMiddleware,updateIncCtrl);
incomeRoute.delete("/:id",authMiddleware, deleteIncCtrl);

module.exports = incomeRoute;