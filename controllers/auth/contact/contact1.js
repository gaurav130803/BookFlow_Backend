const contact = require("../../../models/Contact.model");
const User = require("../../../models/User.model");
const { contactValidation } = require("../../../services/validation_schema");


const contact1 = async (req, res, next) => {
    try {
        const contactValue = await contactValidation.validateAsync(req.body);
        console.log(contactValue);

        const { email, message } = contactValue;

        const existingEmail = await User.findOne({ email });

        if (!existingEmail) {
            return res.status(200).json({
                success: false,
                message: "Register before contacting us "
            })
        }
        const newContact = new contact({
            email,
            message,
        });
        await newContact.save();


        res.status(200).json({
            success: true,
            message: "thank you for contacting us we will get back to you",
        })



    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = contact1;