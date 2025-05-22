const { Schema, model } = require('mongoose');



const StorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  likes: 
  { type: Number,
    default: 0 },
    
    likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  
});

module.exports = model("Story", StorySchema, "story");
