const User = require("../../../models/User.model");

const deleteUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const userDelete = await User.findByIdAndDelete(userId); // ✅ Await here

    if (!userDelete) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully', user: userDelete });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = deleteUser;
