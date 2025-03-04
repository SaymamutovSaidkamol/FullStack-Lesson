import { Router } from "express";
import {
  create,
  findAll,
  remove,
  Search,
  update,
} from "../controllers/comment.controller.js";

import authentication from "../middlewares/authentication.js";

let route = Router();

route.get("/search", authentication, Search);
route.get("/", authentication, findAll);
route.post("/", authentication, create);
route.patch("/:id", authentication, update);
route.delete("/:id", authentication, remove);

/**
 * @swagger 
 * tags:
 *   name: Comments
 *   description: 💬 Comments management API
 *
 * /comment/search:
 *   get:
 *     summary: 🔍 Search comments
 *     description: Search for comments based on query parameters.
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: ✅ Comments retrieved successfully
 *       500:
 *         description: 🔥 Internal server error
 *
 * /comment:
 *   get:
 *     summary: 📜 Get all comments
 *     description: Fetch all comments from the database.
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: ✅ List of comments retrieved successfully
 *       500:
 *         description: 🔥 Internal server error
 *
 *   post:
 *     summary: ➕ Create a new comment
 *     description: Users can add a new comment to a banner.
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - authorId
 *               - bannerId
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Great banner!"
 *               authorId:
 *                 type: integer
 *                 example: 1
 *               bannerId:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: 🎉 Comment created successfully
 *       400:
 *         description: 🚨 Validation error
 *       500:
 *         description: 🔥 Internal server error
 *
 * /comment/{id}:
 *   patch:
 *     summary: ✏️ Update a comment
 *     description: Users can update an existing comment.
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated comment!"
 *     responses:
 *       200:
 *         description: ✅ Comment updated successfully
 *       404:
 *         description: ❌ Comment not found
 *       500:
 *         description: 🔥 Internal server error
 *
 *   delete:
 *     summary: ❌ Delete a comment
 *     description: Users can remove a comment.
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Comment ID
 *     responses:
 *       200:
 *         description: ✅ Comment deleted successfully
 *       404:
 *         description: ❌ Comment not found
 *       500:
 *         description: 🔥 Internal server error
 */


export default route;
