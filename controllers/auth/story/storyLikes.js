const Story = require("../../../models/Story.model");

const storyLikes = async (req, res, next) => {
  try {
    const userId = req.user._id; 

    const story = await Story.findById(req.params.id);

    if (!story) {
      return res.status(404).json({ success: false, message: "Story not found" });
    }

    if (story.likedBy.includes(userId)) {
      return res.status(400).json({ success: false, message: "You already liked this story" });
    }

    story.likes += 1;
    story.likedBy.push(userId);
    await story.save();

    res.status(200).json({ success: true, story });
  } catch (error) {
    console.error("Like failed:", error);
    res.status(500).json({ success: false, message: "Like failed" });
  }
};

module.exports = storyLikes;