const express = require('express');
const { validatePatientForm, validate } = require('../config/patientValidator');
const { patientRegister } = require('../controller/patientController');
const multer = require('multer');
// const { authenticate } = require('../middleware/psychiatristAuthentication');


// Create Multer storage configuration
const uploader=multer({
    storage:multer.diskStorage({}),
})


// Create the patient router
const patientRouter = express.Router();

// Route for patient registration
patientRouter.post('/register', uploader.single('file'),validatePatientForm,validate,patientRegister);

module.exports = { patientRouter };
