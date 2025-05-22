const router = require("express").Router()

const authRoutes = require("./authRoute.js")
const bookRoutes = require("./bookRoutes.js")
const storyRoutes =require("./storyRoutes.js")
router.use("/auth", authRoutes);

router.use("/book",bookRoutes);

router.use("/story",storyRoutes);


module.exports = router;