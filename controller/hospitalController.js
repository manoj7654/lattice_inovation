const Hospital=require("../modals/hospitalModal")
const Psychiatrist = require('../modals/psychiatristModal');
const Patient = require('../modals/patientModal');


const getHospitalDetails = async (req, res) => {
    const { hospitalId } = req.body;

    try {
        const hospital = await Hospital.findById(hospitalId);
        if (!hospital) {
            return res.status(400).send('Invalid hospital ID');
        }
        const psychiatrists = await Psychiatrist.find({ hospitalId: hospitalId });
        if (psychiatrists.length === 0) {
            return res.json({
                hospitalName: hospital.name,
                totalPsychiatristsCount: 0,
                totalPatientsCount: 0,
                psychiatristDetails: []
            });
        }

        const psychiatristDetails = [];
        let totalPatientsCount = 0;

        for (const psychiatrist of psychiatrists) {
            const patients = await Patient.find({ psychiatristId: psychiatrist._id });
            totalPatientsCount += patients.length;

            psychiatristDetails.push({
                id: psychiatrist._id,
                name: psychiatrist.name,
                patientsCount: patients.length
            });
        }

        res.json({
            hospitalName: hospital.name,
            totalPsychiatristsCount: psychiatrists.length,
            totalPatientsCount: totalPatientsCount,
            psychiatristDetails: psychiatristDetails
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
};

module.exports={hospitalAdd,getHospitalDetails}