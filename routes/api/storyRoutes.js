const addStory = require("../../controllers/auth/story/addStory");
const getStories = require("../../controllers/auth/story/getStories");
const getDetailStories = require("../../controllers/auth/story/getDetailStories")
const checkAuth = require("../../middleware/checkAuth");
const storyLikes = require("../../controllers/auth/story/StoryLikes");

const route = require("express").Router();

route.post("/add",checkAuth,addStory);
route.get("/getstories",getStories);
route.get("/:id",getDetailStories);
route.put("/like/:id",checkAuth,storyLikes);

module.exports=route;


