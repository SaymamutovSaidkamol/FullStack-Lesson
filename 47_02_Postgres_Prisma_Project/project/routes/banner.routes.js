import { Router } from "express";
import {
  create,
  findAll,
  findOne,
  remove,
  Search,
  update,
} from "../controllers/banner.controller.js";

import authentication from "../middlewares/authentication.js";

let route = Router();

route.get("/salom", Search);
route.get("/", authentication, findAll);
route.get("/:id", authentication, findOne);
route.post("/", authentication, create);
route.patch("/:id", authentication, update);
route.delete("/:id", authentication, remove);


/**
 * @swagger
 * tags:
 *   name: Banners
 *   description: 🏷 Banner management API
 *
 * /banner:
 *   get:
 *     summary: 📌 Get all banners
 *     description: Fetch all banners from the database.
 *     tags: [Banners]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: ✅ List of banners retrieved successfully
 *       500:
 *         description: 🔥 Internal server error
 *
 *   post:
 *     summary: ➕ Create a new banner
 *     description: Users can create a new banner.
 *     tags: [Banners]
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
 *               - description
 *               - balance
 *               - target
 *               - authorId
 *               - img
 *               - categoryId
 *               - status
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Summer Sale"
 *               description:
 *                 type: string
 *                 example: "Big discounts on all products!"
 *               balance:
 *                 type: number
 *                 format: float
 *                 example: 1000.50
 *               target:
 *                 type: number
 *                 format: float
 *                 example: 5000.00
 *               authorId:
 *                 type: integer
 *                 example: 1
 *               img:
 *                 type: string
 *                 example: "https://example.com/banner.jpg"
 *               categoryId:
 *                 type: integer
 *                 example: 3
 *               status:
 *                 type: string
 *                 example: "active"
 *     responses:
 *       201:
 *         description: 🎉 Banner created successfully
 *       400:
 *         description: 🚨 Validation error
 *       500:
 *         description: 🔥 Internal server error
 *
 * /banner/salom:
 *   get:
 *     summary: 🔍 Search banners
 *     description: Search banners by name or description.
 *     tags: [Banners]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for banners
 *     responses:
 *       200:
 *         description: ✅ Search results retrieved successfully
 *       500:
 *         description: 🔥 Internal server error
 *
 * /banner/{id}:
 *   get:
 *     summary: 📍 Get a specific banner by ID
 *     description: Retrieve details of a banner by its ID.
 *     tags: [Banners]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Banner ID
 *     responses:
 *       200:
 *         description: ✅ Banner details retrieved successfully
 *       404:
 *         description: ❌ Banner not found
 *       500:
 *         description: 🔥 Internal server error
 *
 *   patch:
 *     summary: ✏️ Update a banner
 *     description: Users can update their own banners.
 *     tags: [Banners]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Banner ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Winter Sale"
 *               description:
 *                 type: string
 *                 example: "Huge discounts on all winter products!"
 *               balance:
 *                 type: number
 *                 format: float
 *                 example: 1500.75
 *               target:
 *                 type: number
 *                 format: float
 *                 example: 7000.00
 *               img:
 *                 type: string
 *                 example: "https://example.com/new-banner.jpg"
 *               status:
 *                 type: string
 *                 example: "inactive"
 *     responses:
 *       200:
 *         description: ✅ Banner updated successfully
 *       400:
 *         description: 🚨 Validation error
 *       403:
 *         description: ⛔ Unauthorized access
 *       404:
 *         description: ❌ Banner not found
 *       500:
 *         description: 🔥 Internal server error
 *
 *   delete:
 *     summary: ❌ Delete a banner
 *     description: Users can delete their own banners.
 *     tags: [Banners]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Banner ID
 *     responses:
 *       200:
 *         description: ✅ Banner deleted successfully
 *       403:
 *         description: ⛔ Unauthorized access
 *       404:
 *         description: ❌ Banner not found
 *       500:
 *         description: 🔥 Internal server error
 */


export default route;
