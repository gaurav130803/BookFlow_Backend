const Book = require("../../../models/Book.model");

const getBooks=async(req,res,next) => {
    try {
        const genre = req.params.genre;
        const books = await Book.find({ genre });
        res.json(books);
      } catch (err) {
        res.status(500).json({ error: 'Failed to fetch books by genre' });
      }
    
}

module.exports = getBooks;