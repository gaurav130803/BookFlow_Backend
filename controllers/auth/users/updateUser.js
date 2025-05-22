const User = require("../../../models/User.model");

const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updatedData,
      { new: true } // return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = updateUser;
