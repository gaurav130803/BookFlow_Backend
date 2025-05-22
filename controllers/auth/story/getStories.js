const Story = require("../../../models/Story.model");

const getStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json({
      success: true,
      stories,
    });
  } catch (error) {
    console.error("Error fetching stories:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch stories",
    });
  }
};

module.exports = getStories;
