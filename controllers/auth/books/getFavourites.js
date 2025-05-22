
const User= require("../../../models/User.model");
const Book =require("../../../models/Book.model")
const getFavourites = async (req, res) => {
    try {
        const user=await User.findById(req.user._id);
        const bookIds = user.favourites;

        const books = await Book.find({ _id: { $in: bookIds } });
        res.json(books);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
}

module.exports=getFavourites;