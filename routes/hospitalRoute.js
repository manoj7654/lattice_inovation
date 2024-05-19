const express = require('express');
const { getHospitalDetails } = require('../controller/hospitalController');
const hospitalRouter = express.Router();


hospitalRouter.get("/allHospital",getHospitalDetails)

module.exports = {hospitalRouter};