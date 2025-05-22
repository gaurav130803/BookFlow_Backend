const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",  // replace with your user model name
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  comments: [commentSchema] // ✅ Add this
});

module.exports = model("book", bookSchema, "book");
