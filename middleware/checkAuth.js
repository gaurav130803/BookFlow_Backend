const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];  // Assuming 'Bearer token'

        if (!token) {
            return res.status(401).json({ message: "No token provided." });
        }
        
        
        
        
        const decoded = jwt.verify(token, secretKey);
        req.user = {
            _id: decoded._id || decoded.id,
            email: decoded.email
        };
        
        console.log("req.user-",req.user);
        
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};

module.exports = checkAuth;
