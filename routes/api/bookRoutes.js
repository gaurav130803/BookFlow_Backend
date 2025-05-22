const route = require("express").Router();
const multer=require("multer");

const addBooks=require("../../controllers/auth/books/add");
const getBooks=require("../../controllers/auth/books/getBooks")
const getAllBooks=require("../../controllers/auth/books/getAllBooks");

const checkAuth = require("../../middleware/checkAuth");
const getBookDetails = require("../../controllers/auth/books/getBookDetails");

const addToFavourites =require("../../controllers/auth/books/addToFavourites");
const getFavourites=require("../../controllers/auth/books/getFavourites");
const removeFromFavourites =require("../../controllers/auth/books/removeFromFavourites");
 const addComments=require("../../controllers/auth/books/addComments");
const add = require("../../controllers/auth/books/add");
const deleteBook = require("../../controllers/auth/books/deleteBook");
const updateBook=require('../../controllers/auth/books/updateBook')
const searchBooks=require("../../controllers/auth/books/searchBooks")


const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})


const upload=multer({storage:storage})

route.post("/add",upload.single("coverImage"),addBooks);
route.get("/genre/:genre",getBooks);
route.get("/allbooks",getAllBooks);

route.post('/:bookId/favourites',checkAuth,addToFavourites);
route.get("/getFavourites/fav",checkAuth,getFavourites);
route.delete("/removeFromFavourites/:bookId", checkAuth, removeFromFavourites);
 route.post('/:bookId/comment',checkAuth,addComments);
 route.delete('/deletebook/:bookId',deleteBook);
 route.put('/edit/:id',upload.single('coverImage'), updateBook);
 route.get("/search", searchBooks);
 route.get('/:bookId',getBookDetails);





module.exports=route;