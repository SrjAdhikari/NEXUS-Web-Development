// Import validator library for email and password validation
import validator from 'validator';

// Define middleware function for user input validation
const userValidator = (req, res, next) => {
    // Destructure required fields from request body
    const { firstName, lastName, email, password } = req.body;

    // Check if all required fields are present
    // Returns error if any field is missing or falsy
    if(!firstName || !lastName || !email || !password) {
        return res.status(400).send("FirstName, LastName, Email and Password are required fields.");
    }

    // Validate firstName length should check if length is NOT between 3 and 20
    if(firstName.length < 3 && firstName.length > 20) {
        return res.status(400).send("FirstName must be between 3 and 20 characters.");
    }

    // Validate lastName length should check if length is NOT between 3 and 20
    if(lastName.length < 3 && lastName.length > 20) {
        return res.status(400).send("LastName must be between 3 and 20 characters.");
    }

    // Validate email format using validator library
    // Checks if email follows standard email pattern
    if(!validator.isEmail(email)) {
        return res.status(400).send("Invalid email format.");
    }

    // Validate password strength
    if(!validator.isStrongPassword(password, { 
        minLength: 8,        // Minimum 8 characters
        minLowercase: 1,     // At least 1 lowercase letter
        minUppercase: 1,     // At least 1 uppercase letter
        minNumbers: 1,       // At least 1 number
        minSymbols: 1        // At least 1 symbol
    })) {
        return res.status(400).send("Password must be strong and contain at least 8 characters, including uppercase, lowercase, numbers, and symbols.");
    }

    // If all validations pass, proceed to next middleware/route handler
    next();
}

// Export the validator middleware as default export
export default userValidator;