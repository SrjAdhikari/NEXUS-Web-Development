// Import validator library for email and password validation
import validator from 'validator';

// Define middleware function for user input validation
const validateRegistration = (req, res, next) => {
    // Destructure required fields from request body
    const { firstName, lastName, email, password } = req.body;

    //* ========================
    //* 🛡️ Required Fields Check
    //* ========================

    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({
            status: "fail",
            message: "Please provide firstName, lastName, email and password"
        });
    }

    //* ========================
    //* 📛 Name Validation
    //* ========================

    // Define regular expression for name validation
    const nameRegex = /^[a-zA-Z-]+$/;

    // FirstName validation
    if(firstName.length < 3 && firstName.length > 20) {
        return res.status(400).json({
            status: "fail",
            message: "FirstName must be between 3 and 20 characters."
        });
    }

    if(!nameRegex.test(firstName)) {
        return res.status(400).json({
            status: "fail",
            message: "FirstName contains invalid characters"
        });
    }

    // LastName validation
    if(lastName.length < 3 && lastName.length > 20) {
        return res.status(400).json({
            status: "fail",
            message: "LastName must be between 3 and 20 characters."
        });
    }

    if(!nameRegex.test(lastName)) {
        return res.status(400).json({
            status: "fail",
            message: "LastName contains invalid characters"
        });
    }

    //* ========================
    //* 📧 Email Validation
    //* ========================

    // Validate email format using validator library
    // Checks if email follows standard email pattern
    if(!validator.isEmail(email)) {
        return res.status(400).json({
            status: "fail",
            message: "Invalid email format."
        });
    }

    //* ========================
    //* 🔑 Password Validation
    //* ========================

    const passwordStrength = {
        minLength: 8,        // Minimum 8 characters
        minLowercase: 1,     // At least 1 lowercase letter
        minUppercase: 1,     // At least 1 uppercase letter
        minNumbers: 1,       // At least 1 number
        minSymbols: 1        // At least 1 symbol
    }

    // Validate password strength
    if(!validator.isStrongPassword(password, passwordStrength)) {
        return res.status(400).json({
            status: "fail",
            message: "Password must contain at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 symbol"
        });
    }

    // If all validations pass, proceed to next middleware/route handler
    next();
}

// Export the validator middleware as default export
export default validateRegistration;