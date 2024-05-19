const express = require('express');
const { hospitalDetails, allHospital } = require('../controller/hospitalController');
const hospitalRouter = express.Router();


hospitalRouter.post("/hospitalDetails",hospitalDetails)
hospitalRouter.get("/allHopsital",allHospital)
module.exports = {hospitalRouter};