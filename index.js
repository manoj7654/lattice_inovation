// importing express for creating app
const express=require("express")
const app=express();

// importing connection for making server 
const {connection}=require("./config/db");
const {patientRouter} = require("./routes/patientRouter");
const { hospitalRouter } = require("./routes/hospitalRoute");
const { psychiatristRouter } = require("./routes/psychiatristRoute");

// swagger 
const swaggerJsDoc=require("swagger-jsdoc");
const swaggerUi=require("swagger-ui-express");

require("dotenv").config()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page of this api")
})
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "User Api",
            version: "1.0.0",
            description: "API documentation for Hospital Management",
        },
        servers: [
            {
                url: "http://localhost:4500"
            }
        ],
    },
    apis: ['./index.js'] 
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The patient's name.
 *         address:
 *           type: string
 *           description: The patient's address.
 *         email:
 *           type: string
 *           description: The patient's email address.
 *         phone:
 *           type: string
 *           description: The patient's phone number.
 *         password:
 *           type: string
 *           description: The patient's password.
 *         photo:
 *           type: string
 *           description: URL of the patient's photo.
 *         psychiatristId:
 *           type: string
 *           description: The ID of the psychiatrist associated with the patient.
 *       required:
 *         - name
 *         - address
 *         - email
 *         - phone
 *         - password
 *         - photo
 *         - psychiatristId
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Psychiatrist:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The psychiatrist's name.
 *         hospitalId:
 *           type: string
 *           description: The ID of the hospital associated with the psychiatrist.
 *       required:
 *         - name
 *         - hospitalId
 */


/**
 * @swagger
 * /patients/register:
 *   post:
 *     summary: Register a new patient
 *     description: This endpoint inserts a new patient into the database.
 *     tags: [Patient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       '201':
 *         description: Patient created successfully
 *       '400':
 *         description: Bad request - Invalid input data
 *       '401':
 *         description: Unauthorized - Authentication required
 *       '500':
 *         description: Internal server error - Failed to create user
 */

/**
 * @swagger
 * /psychiatrists/allPsychiatrist:
 *   get:
 *     summary: Get all psychiatrists
 *     description: Retrieve a list of all psychiatrists.
 *     tags: [Psychiatrists]
 *     responses:
 *       '200':
 *         description: A list of psychiatrists retrieved successfully
 *       '500':
 *         description: Internal server error - Failed to retrieve psychiatrists
 */

/**
 * @swagger
 * /psychiatrists/getPsychiatristByHospitalId:
 *   post:
 *     summary: Get psychiatrists by hospital ID
 *     description: Retrieve a list of psychiatrists by hospital ID passed in the request body.
 *     tags: [Psychiatrists]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hospitalId:
 *                 type: string
 *                 description: The ID of the hospital to retrieve psychiatrists for.
 *           example:
 *             hospitalId: hospital_id_here
 *     responses:
 *       '200':
 *         description: A list of psychiatrists retrieved successfully
 *       '400':
 *         description: Bad request - Invalid input data
 *       '500':
 *         description: Internal server error - Failed to retrieve psychiatrists
 */

/**
 * @swagger
 * /hospitals/allHopsital:
 *   get:
 *     summary: Get all hospitals
 *     description: Retrieve a list of all hospitals.
 *     tags: [Hospitals]
 *     responses:
 *       '200':
 *         description: A list of hospitals retrieved successfully
 *       '500':
 *         description: Internal server error - Failed to retrieve hospitals
 */
/**
 * @swagger
 * /hospitals/hospitalDetails:
 *   post:
 *     summary: Get hospital details by hospital id
 *     description: Retrieve a hospital details by its ID passed in the request body.
 *     tags: [Hospitals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hospitalId:
 *                 type: string
 *                 description: The ID of the hospital to retrieve.
 *           example:
 *             hospitalId: hospital_id_here
 *     responses:
 *       '200':
 *         description: Hospital retrieved successfully
 *       '400':
 *         description: Bad request - Invalid input data
 *       '404':
 *         description: Hospital not found
 *       '500':
 *         description: Internal server error - Failed to retrieve hospital
 */


  const swaggerSpec=swaggerJsDoc(options);
  app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))

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

