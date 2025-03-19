const authentication  = (req, res, next) => {
    // Dummy code for Authentication
    const token = "token123";
    const access = token === "token123" ? true : false;

    if(!access)
        res.status(403).send("No Permission");

    next();
};

module.exports = { authentication };