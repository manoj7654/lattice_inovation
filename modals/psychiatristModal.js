const mongoose = require('mongoose');

const psychiatristSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true }
});

const Psychiatrist = mongoose.model('psychiatrists', psychiatristSchema);
module.exports = Psychiatrist;
