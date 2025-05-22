const Book=require("../../../models/Book.model")
const fs = require('fs');
const path = require('path');
const deleteBook = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      console.log(bookId);
      
  
      const book = await Book.findByIdAndDelete(bookId);
  
      if (!book) return res.status(404).json({ message: 'Book not found' });
  
      // Optional: delete uploaded cover image from disk
      const imagePath = path.join(__dirname, '../uploads/', book.coverImage);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
  
      res.status(200).json({ success: true, message: 'Book deleted successfully' });
    } catch (err) {
      console.error('Error deleting book:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };


  module.exports=deleteBook;