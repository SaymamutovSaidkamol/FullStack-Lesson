import { Router } from "express";
import {
  create,
  findAll,
  remove,
} from "../controllers/likes.controller.js";

import authentication from "../middlewares/authentication.js"

let route = Router();

route.get("/", authentication, findAll);
route.post("/",authentication, create);
route.delete("/:id", authentication, remove);

/**
 * @swagger
 * tags:
 *   name: Likes
 *   description: ❤️ Likes management API
 *
 * likes:
 *   get:
 *     summary: 📜 Get all likes
 *     description: Fetch all likes from the database.
 *     tags: [Likes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: ✅ List of likes retrieved successfully
 *       500:
 *         description: 🔥 Internal server error
 *
 *   post:
 *     summary: ❤️ Like a banner
 *     description: Users can like a banner. A user can only like a banner once.
 *     tags: [Likes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bannerId
 *               - authorId
 *             properties:
 *               bannerId:
 *                 type: integer
 *                 example: 5
 *               authorId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: 🎉 Like added successfully
 *       400:
 *         description: 🚨 Validation error
 *       404:
 *         description: ❌ User or Banner not found
 *       409:
 *         description: ❗ User has already liked this Banner
 *       500:
 *         description: 🔥 Internal server error
 *
 * likes/{id}:
 *   delete:
 *     summary: ❌ Remove a like
 *     description: Users can remove a like from a banner.
 *     tags: [Likes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Like ID
 *     responses:
 *       200:
 *         description: ✅ Like removed successfully
 *       404:
 *         description: ❌ Like not found
 *       500:
 *         description: 🔥 Internal server error
 */


export default route;
