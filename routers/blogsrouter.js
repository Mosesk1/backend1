import express from "express";
// import multer from "multer";
// import cloudinary from "../utils/cloudinary.js";
//import upload from '../utils/multer.js'

import { getAllArticles, createArticle,getOneArticle,modifyArticle,deleteArticle, getArticle} from "../controllers/blogs.js";

import  {isAdmin} from "../middlewares/usermiddle.js";




const router = express.Router();

router.get('/blogs', getAllArticles);

router.post('/blogs',isAdmin, createArticle);

router.get('/blogs/:id', getOneArticle);

router.patch('/blogs/:id',isAdmin, modifyArticle);

router.delete('/blogs/:id',isAdmin, deleteArticle);




 






export default router;