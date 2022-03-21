import express from "express";
// import multer from "multer";
// import cloudinary from "../utils/cloudinary.js";
//import upload from '../utils/multer.js'

import { getAllArticles, createArticle,getOneArticle,modifyArticle,deleteArticle, getArticle} from "../controllers/blogs.js";

import  {isAdmin} from "../middlewares/usermiddle.js";


/**
*  @swagger
*  tags:
*    name: blog
*    description: API to manage your blogs.
*/

/**
 * @swagger
 * definitions:
 *   blog:
 *     properties:
 *       title:
 *         type: string
 *       content:
 *         type: string
 *       image:
 *         type: string
 */

// Get all blogs
/**
 * @swagger
 * /blogs:
 *   get:
 *     tags:
 *       - blog
 *     summary: Retrieve all blog API
 *     description: Returns all blogs
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of all blogs
 *         schema:
 *           $ref: '#/definitions/blog'
 */

// Get blog by ID

/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     tags:
 *       - blog
 *     summary: Retrieve single blog API
 *     description: Returns a single blog
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: blog's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single blog
 *         schema:
 *           $ref: '#/definitions/blog'
 */
/**
 * @swagger
 * /blogs/{id}:
 *  put:
 *   tags:
 *    - blog
 *   summary: update blog API
 *   description: update blog
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - name: authorization
 *      in: header
 *      required: true
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of blog
 *      example: 1
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/blog'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/blog'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/blog'
 */

/**
  * @swagger
  * /blogs/{id}:
  *   delete:
  *     tags:
  *       - blog
  *     summary: Delete blog API
  *     description: Deletes a single blog
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: authorization
  *         in: header
  *         required: true
  *       - name: id
  *         description: blog's id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Successfully deleted
  */


const router = express.Router();

router.get('/blogs', getAllArticles);

router.post('/blogs',isAdmin, createArticle);

router.get('/blogs/:id', getOneArticle);

router.patch('/blogs/:id',isAdmin, modifyArticle);

router.delete('/blogs/:id',isAdmin, deleteArticle);




 






export default router;