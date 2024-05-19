const express = require('express');
const { getPsychiatristByHospitalId, getAllPsychiatrist } = require('../controller/psychiatristController');
const psychiatristRouter = express.Router();


psychiatristRouter.post('/getPsychiatristByHospitalId', getPsychiatristByHospitalId);
psychiatristRouter.get("/allPsychiatrist",getAllPsychiatrist)

module.exports = {psychiatristRouter};