const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true},
    phone: { type: String, required: true},
    password: { type: String, required: true},
    photo: { type: String, required: true },
    psychiatristId: { type: mongoose.Schema.Types.ObjectId, ref: 'Psychiatrist' }
});

const Patient = mongoose.model('patients', patientSchema);
module.exports = Patient;
