const Book = require('../../../models/Book.model');

const searchBooks = async (req, res) => {
  const { query } = req.query;
  
  

  if (!query) {
    return res.status(400).json({ success: false, message: 'Search query is required' });
  }

  try {
    const books = await Book.find({
        name: { $regex: query.trim(), $options: 'i' }
      }).limit(10);
      

    res.status(200).json({ success: true, books });
  } catch (error) {
    console.error("Error searching books:", error);
    res.status(500).json({ success: false, message: 'Failed to search books' });
  }
};

module.exports = searchBooks;
