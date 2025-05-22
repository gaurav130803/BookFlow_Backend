const { message } = require("antd");
const User = require("../../../models/User.model");
const { registrationValidation } = require("../../../services/validation_schema");
const sendEmailForAddUser =require("../../../services/mailer")
const register = async (req, res, next) => {
  try {
   const registerValue=await registrationValidation.validateAsync(req.body);
   console.log(registerValue);

    const {email,username,password,role}=registerValue;

    const emailVerification=await User.findOne({
        email
    })
    

    console.log(emailVerification);

    if(emailVerification){
        console.log("User Already exist");
        return res.status(400).json({
            success: false,
            message: "User Already exist",
          });
          
    }
    else{
        const newUser = new User({
            email,
            username,
            password,
            role
          });
          await newUser.save();


          try {
            await sendEmailForAddUser(email, password); // optionally send username here too
          } catch (emailErr) {
            console.error("Email sending failed:", emailErr.message);
            // You can still return 201, or include a warning
          }
      

          res.status(200).json({
            success: true,
            message: "User registered successfully",
            data: registerValue,
          });
    }


  } catch (error) {
    next(error);
  }
};

module.exports = register;