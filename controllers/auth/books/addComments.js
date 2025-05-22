const Book = require('../../../models/Book.model');

const addComments = async (req, res) => {
    try {
      const { message } = req.body;
      const bookId = req.params.bookId; // Ensure you're using bookId here
  
      console.log("Received message:", message);
      console.log("User from req.user:", req.user);
  
      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }
  
      const book = await Book.findById(bookId);
      if (!book) return res.status(404).json({ message: "Book not found" });
  
      if (!req.user || !req.user._id) {
        return res.status(401).json({ message: "User not authenticated" });
      }
  
      const comment = {
        user: req.user._id,
        message
      };
  
      console.log("Adding comment:", comment);
  
      book.comments.push(comment);
      await book.save();
  
      res.status(200).json({ message: "Comment added successfully" });
    } catch (err) {
      console.error("Error adding comment:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

module.exports = addComments;