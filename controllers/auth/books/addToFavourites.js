const User = require("../../../models/User.model");
const Book = require("../../../models/Book.model");

const addToFavourites = async (req, res) => {
    try {

        console.log(req.user._id);
        
        // Check if the user is authenticated
        

        // Find the user based on the ID in the decoded JWT token
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                message: "User not found.",
            });
        }

        // Get the book ID from the request body
        const bookId = req.params.bookId;
        
        // Find the book by its ID
        const book = await Book.findById(bookId);
        
        if (!book) {
            return res.status(404).json({
                message: "Book not found.",
                success:false
            });
        }



        // Add the book to the user's favourites if it's not already in the list
        if (!user.favourites.includes(bookId)) {
            user.favourites.push(bookId);
            await user.save();
        }

        return res.status(200).json({
            message: "Book added to favourites.",
            success:true,
            favourites: user.favourites,
        });

    } catch (error) {
        console.error("Error adding to favourites:", error);
        return res.status(500).json({
            message: "Server error, please try again later.",
        });
    }
};

module.exports = addToFavourites;
