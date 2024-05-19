const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const Hospital = mongoose.model('hospitals', hospitalSchema);
module.exports = Hospital;
