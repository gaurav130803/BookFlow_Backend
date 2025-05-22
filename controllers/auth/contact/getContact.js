const contact = require("../../../models/Contact.model");


const getContact= async (req, res) => {
    try {
        const contacts = await contact.find();
        res.json(contacts);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
}

module.exports=getContact;