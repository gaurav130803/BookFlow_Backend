const axios = require('axios');
const jwt = require('jsonwebtoken');
const { oauth2Client } = require('../../../util/googleClient');
const User = require('../../../models/User.model'); 
require('dotenv').config(); 

const googleLogin = async (req, res) => {
  try {
    const code = req.query.code;

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
    );

    const { email, name} = userRes.data;

    // Find or create user in DB
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        username: name,
        password: "", 
        isGoogleUser: true 
      });
    }

    // Sign JWT
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.SECRET_KEY,
      
    );
    const username=user.username;

    // Respond
    res.status(200).json({
        sucess:true,
      message: 'Login successful',
      token,
      user: {
        email: user.email,
        name: user.username,
        
      },
     username
    });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(500).json({ sucess:false,
        message: 'Internal Server Error' });
  }
};

module.exports = googleLogin;
