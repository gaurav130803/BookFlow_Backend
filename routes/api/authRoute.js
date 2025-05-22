const route = require("express").Router()

const register = require("../../controllers/auth/users/register.js")
const login = require("../../controllers/auth/users/login.js")
const contact1 = require("../../controllers/auth/contact/contact1.js");
const checkAuth = require("../../middleware/checkAuth.js");
const getuser=require("../../controllers/auth/users/getUser.js");
const getContact=require("../../controllers/auth/contact/getContact.js")
const updateUser=require("../../controllers/auth/users/updateUser.js")
const deleteUser=require("../../controllers/auth/users/deleteUser.js");
const googleLogin = require("../../controllers/auth/users/googleLogin.js");

route.post("/register", register);
route.post("/login",login);
route.post("/contact",contact1);
route.get("/getuser",getuser);
route.get("/getcontact",getContact);
route.put("/updateuser/:id",updateUser);
route.delete("/deleteuser/:id",deleteUser);
route.post("/google",googleLogin);


module.exports = route