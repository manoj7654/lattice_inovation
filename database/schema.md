# Database Schema

## Hospital Collection

{
    "_id": "ObjectId",
    "name": "String"
}

{
    "_id": "664a03e0952868d3ee6bf386",
    "name": "AIIMS - All India Institute Of Medical Science"
}

## Psychiatrist Collection

{
    "_id": "ObjectId",
    "name": "String",
    "hospitalId": "ObjectId"
}

{
    "_id": "PSYCHIATRIST_ID_1",
    "name": "Dr. John Doe",
    "hospitalId": "664a03e0952868d3ee6bf386"
}

## Patient Collection

{
    "_id": "ObjectId",
    "name": "String",
    "address": "String",
    "email": "String",
    "phoneNumber": "String",
    "password": "String",
    "photo": "String",
    "psychiatristId": "ObjectId"
}

{
    "_id": "PATIENT_ID_1",
    "name": "Jane Smith",
    "address": "123 Main Street",
    "email": "jane@example.com",
    "phoneNumber": "+911234567890",
    "password": "Password1",
    "photo": "path/to/photo.jpg",
    "psychiatristId": "PSYCHIATRIST_ID_1"
}