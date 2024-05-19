const express = require('express');
const { hospitalAdd } = require('../controller/hospitalController');
const { PsychiatristRegister, data } = require('../controller/psychiatristController');
const psychiatristRouter = express.Router();

psychiatristRouter.post('/register', PsychiatristRegister);
psychiatristRouter.get('/all', data);


module.exports = {psychiatristRouter};