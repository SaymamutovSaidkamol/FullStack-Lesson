import { Router } from "express";
import {
  create,
  findAll,
  findOne,
  remove,
  Search,
  update,
} from "../controllers/category.controller.js";

import authentication from "../middlewares/authentication.js";
import authorization from "../middlewares/authorization.js";

let route = Router();

route.get("/search", authentication, authorization(["ADMIN"]), Search);
route.get("/", authentication, findAll);
route.get("/:id", authentication, findOne);
route.post("/", authentication, authorization(["ADMIN"]), create);
route.patch("/:id", authentication, authorization(["ADMIN"]), update);
route.delete("/:id", authentication, authorization(["ADMIN"]), remove);

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: 🏷 Category management API
 *
 * /categ:
 *   get:
 *     summary: 📌 Get all categories
 *     description: Fetch all categories from the database.
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: ✅ List of categories retrieved successfully
 *       500:
 *         description: 🔥 Internal server error
 *
 *   post:
 *     summary: ➕ Create a new category
 *     description: Admins can create a new category.
 *     tags: [Categories]
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
 *               - img
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Electronics"
 *               img:
 *                 type: string
 *                 example: "https://example.com/category.jpg"
 *     responses:
 *       201:
 *         description: 🎉 Category created successfully
 *       400:
 *         description: 🚨 Validation error
 *       403:
 *         description: ⛔ Unauthorized access
 *       500:
 *         description: 🔥 Internal server error
 *
 * /categ/search:
 *   get:
 *     summary: 🔍 Search categories
 *     description: Admins can search categories by name.
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for categories
 *     responses:
 *       200:
 *         description: ✅ Search results retrieved successfully
 *       403:
 *         description: ⛔ Unauthorized access
 *       500:
 *         description: 🔥 Internal server error
 *
 * /categ/{id}:
 *   get:
 *     summary: 📍 Get a specific category by ID
 *     description: Retrieve details of a category by its ID.
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Category ID
 *     responses:
 *       200:
 *         description: ✅ Category details retrieved successfully
 *       404:
 *         description: ❌ Category not found
 *       500:
 *         description: 🔥 Internal server error
 *
 *   patch:
 *     summary: ✏️ Update a category
 *     description: Admins can update category details.
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Home Appliances"
 *               img:
 *                 type: string
 *                 example: "https://example.com/new-image.jpg"
 *     responses:
 *       200:
 *         description: ✅ Category updated successfully
 *       400:
 *         description: 🚨 Validation error
 *       403:
 *         description: ⛔ Unauthorized access
 *       404:
 *         description: ❌ Category not found
 *       500:
 *         description: 🔥 Internal server error
 *
 *   delete:
 *     summary: ❌ Delete a category
 *     description: Admins can delete a category.
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Category ID
 *     responses:
 *       200:
 *         description: ✅ Category deleted successfully
 *       403:
 *         description: ⛔ Unauthorized access
 *       404:
 *         description: ❌ Category not found
 *       500:
 *         description: 🔥 Internal server error
 */


export default route;
