const express = require('express');
const { hospitalAdd, getHospitalDetails } = require('../controller/hospitalController');
const hospitalRouter = express.Router();

hospitalRouter.post('/add', hospitalAdd);
hospitalRouter.get("/all",getHospitalDetails)

module.exports = {hospitalRouter};