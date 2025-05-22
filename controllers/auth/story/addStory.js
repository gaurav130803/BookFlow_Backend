const Story = require("../../../models/Story.model");
const User = require("../../../models/User.model");

const addStory = async (req, res, next) => {
  try {
    const user = req.user; 
    const dbUser = await User.findById(user._id);

    const { title, genre, content } = req.body;
    const author = dbUser.username; 

    const story = new Story({
      title,
      genre,
      content,
      author, 
    });

    await story.save();

    res.status(200).json({
      success: true,
      message: "Story added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to save story",
    });
  }
};

module.exports = addStory;
