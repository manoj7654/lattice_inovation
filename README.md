## Table of Contents

- [Installation](#installation)

- [Configuration](#configuration)

- [Endpoints](#endpoints)

- [Data Models](#data-models)

- [Validation](#validation)

- [File Upload](#file-upload)

- [Dependency](#dependency)

### Installation

- Clone the repository:


        git clone <your repository_url>
        

- Install the dependencies:


            npm install

- Set up your environment variables. Create a .env file in the root directory of the project with the following content:


            port=YOUR_PORT_NUMBER
            mongoUrl=YOUR_MONGO_DB_URL
            cloud_name=YOUR_CLOUDINARY_CLOUD_NAME
            api_key=YOUR_CLOUDINARY_API_KEY
            api_secret=YOUR_CLOUDINARY_API_SECRET

- Start the server:

      npm run server


### Configuration
- The application uses environment variables for configuration. Ensure you have a .env file in the root directory with the following variables:

- port: The port on which the server will run.
- mongoUrl: The MongoDB connection string.
- cloud_name, api_key, api_secret: Your Cloudinary credentials for file uploads.


### Endpoints

`Hospitals`

#### Get Hospital Details

- Endpoint : /hospitals/allHospital
- Method: GET

- Response:

            200 OK: Hospital details.
            500 Internal Server Error: Server error.


`Psychiatrists`

#### Get All Psychiatrists by Hospital
- Endpoint : /psychiatrists/getPsychiatristByHospitalId
- Method: GET
Request Body:

            {
            "hospitalId": "hospital_id"
            }

- Response:

        200 OK: List of psychiatrists.
        500 Internal Server Error: Error message.

#### Get All Psychiatrists 
- Endpoint : /psychiatrists/allPsychiatrist
- Method: GET
- Response:

        200 OK: List of all psychiatrists.
        500 Internal Server Error: Error message.


`Patients`

#### Register a Patient

- Endpoint : /patients/register
- Method: POST
- Request Body:
        
        {
            "name": "John Doe",
            "address": "1234 Elm Street, Springfield, IL 62704",
            "email": "johndoe@example.com",
            "phone": "+12345678901",
            "password": "SecureP@ssw0rd",,
            "photo":"photo url"
            "psychiatristId": "60b8d6f4e1c8e053d8f8c39b"
       }


- Response:

        201 Created: Patient registered successfully.
        400 Bad Request: Validation errors.
        500 Internal Server Error: Error message.


### Data Models

`Hospital`

- name (String, required)

`Psychiatrist`

- name (String, required)
- hospitalId (ObjectId, ref: Hospital, required)

`Patient`

- name (String, required)
- address (String, required)
- email (String, required)
- phone (String, required)
- password (String, required)
- photo (String, required)
- psychiatristId (ObjectId, ref: Psychiatrist)

### Validation

`The patient registration uses the following validations:`

- name: Must not be empty.
- address: Must be at least 10 characters long.
- email: Must be a valid email address.
- phone: Must match the format +<country code><number> and be at least 10 digits long.
- password: Must be between 8 and 15 characters long, and contain at least one uppercase letter, one lowercase letter, and one number.
- photo: A photo file is required.

### File Upload

- File uploads for patient photos are handled using Cloudinary. The uploadFile function in upload.js handles the upload process.

### Dependency
- Multer: A middleware for handling multipart/form-data, which is primarily used for uploading files. It simplifies the process of handling file uploads in Node.js applications.



- Express Validator: An Express middleware for validation of form data. It provides a set of functions to validate data and sanitize inputs, making it easier to handle form validation in Express applications.


- Bcrypt: A library for hashing passwords. It's commonly used for securely storing passwords by hashing them before storing in a database. Bcrypt provides methods for generating salted and hashed password strings.


- Swagger: A tool for documenting RESTful APIs. Swagger provides a specification format for describing APIs and tools for generating interactive API documentation. It helps developers and users understand and interact with the API more easily.


- Cloudinary: A cloud-based image and video management service. It provides features for uploading, storing, managing, and delivering images and videos for web and mobile applications. Cloudinary also offers image manipulation and optimization capabilities.

