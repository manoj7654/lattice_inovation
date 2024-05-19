// importing express for creating app
const express=require("express")
const app=express();

// importing connection for making server 
const {connection}=require("./config/db");
const {patientRouter} = require("./routes/patientRouter");
const { hospitalRouter } = require("./routes/hospitalRoute");
const { psychiatristRouter } = require("./routes/psychiatristRoute");

// const { Hospital, Psychiatrist, Patient } = require('./association');
// importing dotenv for accessing data from .env file
require("dotenv").config()

/

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page of this api")
})

app.use("/patients",patientRouter)
app.use("/hospitals",hospitalRouter)
app.use("/psychiatrists",psychiatristRouter)




// running server on specific port no and connection to database
app.listen(process.env.port,async()=>{
    try {
      await connection;
      console.log("Database connected successfully")
    } catch (error) {
        console.log("Getting Error while running server")
    }
    console.log(`Server is running on http://localhost:${process.env.port}`);
})

