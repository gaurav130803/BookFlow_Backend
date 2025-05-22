const Story = require("../../../models/Story.model");

const getDetailStories= async (req,res,next)=>{
    try {
        const story = await Story.findById(req.params.id);
        if (!story) {
          return res.status(404).json({ success: false, message: "Story not found" });
        }
        res.status(200).json({ success: true, story });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching story" });
      }
}

module.exports=getDetailStories;