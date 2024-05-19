
const Psychiatrist=require("../modals/psychiatristModal")

const PsychiatristRegister = async (req, res) => {
    try {
        const { name,hospitalId } = req.body;
        
        let result=await Psychiatrist({name,hospitalId});
          await result.save()
        res.status(201).send('Psychiatrist registered successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const data = async (req, res) => {
    try {
    const {hospitalId}=req.body
     const result=await Psychiatrist.find({hospitalId:hospitalId})
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports={PsychiatristRegister,data}