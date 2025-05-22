const Book = require("../../../models/Book.model");

const getBookDetails = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId)
      .populate('comments.user', 'username email'); // 👈 Add this

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json(book);
  } catch (err) {
    console.error("Error fetching book:", err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports=getBookDetails;