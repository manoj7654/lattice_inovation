const bcrypt=require("bcrypt");
const Patient=require("../modals/patientModal")
const {uploadFile}=require("../upload");
require("dotenv").config();
const patientRegister=async(req,res)=>{
    
    try {
        const { name, address, email, phone, password,psychiatristId} = req.body;
        const photo=req.file.path
        const result=await uploadFile(photo);
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const patientData = { name, address, email, phone, password: hashedPassword, photo:result.url,psychiatristId  };
        let patient =new Patient(patientData);
        await patient.save()
        res.status(201).send('Patient registered successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports={patientRegister}