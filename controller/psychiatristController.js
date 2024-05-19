
const Psychiatrist=require("../modals/psychiatristModal")


const getPsychiatristByHospitalId = async (req, res) => {
    try {
    const {hospitalId}=req.body
     const result=await Psychiatrist.find({hospitalId:hospitalId})
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const getAllPsychiatrist = async (req, res) => {
    try {

     const result=await Psychiatrist.find()
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports={getPsychiatristByHospitalId,getAllPsychiatrist}