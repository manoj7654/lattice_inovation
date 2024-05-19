const { body, validationResult } = require('express-validator');

const validatePatientForm = [
    body('name').notEmpty().withMessage('Name is required'),
    body('address').isLength({ min: 10 }).withMessage('Address should be at least 10 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('phone').matches(/^\+\d{1,3}\d{10,}$/).withMessage('Phone number must be in the format +<country code><number> and at least 10 digits long'),   
    body('password')
        .isLength({ min: 8, max: 15 }).withMessage('Password must be between 8 and 15 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
    body('photo').custom((value, { req }) => {
            if (!req.file) {
                throw new Error('Patient photo is required');
            }
            return true;
        })
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validatePatientForm,
    validate
};
