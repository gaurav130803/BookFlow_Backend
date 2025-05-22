const Book = require("../../../models/Book.model");

const add = async (req, res, next) => {
  try {
    // Ensure a file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "Cover image is required",
        
       });
    }

    const coverImage = req.file.filename;
    const { name, author, description, genre } = req.body;

    // Optional: validate fields
    if (!name || !author || !description || !genre) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = new Book({
      name,
      author,
      description,
      genre,
      coverImage,
    });

    await newBook.save();

    res.status(201).json({ message: "Book added successfully", book: newBook,
      success:true
     });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = add;
