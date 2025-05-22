// controllers/book/removeFromFavourites.js
const User = require("../../../models/User.model");

const removeFromFavourites = async (req, res) => {
  try {
    const userId = req.user._id;
    const { bookId } = req.params;

    await User.findByIdAndUpdate(userId, {
      $pull: { favourites: bookId },
    });

    res.status(200).json({ message: "Book removed from favourites" ,success:true});
  } catch (error) {
    console.error("Error removing from favourites:", error);
    res.status(500).json({ message: "Server error",success:false });
  }
};

module.exports = removeFromFavourites;
