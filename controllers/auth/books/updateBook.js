const Book=require("../../../models/Book.model")

const updateBook = async (req, res) => {
    try {
      const bookId = req.params.id;
      const { name, author, description, genre } = req.body;
  
      const updateData = {
        name,
        author,
        description,
        genre,
      };
  
      // If cover image was uploaded, add to updateData
      if (req.file) {
        updateData.coverImage = req.file.filename;
      }
  
      const updatedBook = await Book.findByIdAndUpdate(bookId, updateData, { new: true });
  
      if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
  
      res.status(200).json({ success: true, book: updatedBook });
    } catch (err) {
      console.error('Error updating book:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  module.exports=updateBook;