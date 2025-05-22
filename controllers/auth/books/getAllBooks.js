const Book = require("../../../models/Book.model");

const getAllBooks = async (req, res) => {
    try {
        const Books = await Book.find();
        res.json(Books);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
}

module.exports=getAllBooks;