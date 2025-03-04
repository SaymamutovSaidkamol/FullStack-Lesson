import { Router } from "express";
import {
  create,
  findAll,
  findOne,
  remove,
  update,
} from "../controllers/region.controller.js";

import authentication from "../middlewares/authentication.js"
import authorization from "../middlewares/authorization.js";

let route = Router();

route.get("/", authentication, authentication, findAll);
route.get("/:id",authentication, findOne);
route.post("/",authentication, authorization(["ADMIN"]), create);
route.patch("/:id", authentication,  authorization(["ADMIN"]),update);
route.delete("/:id", authentication, authorization(["ADMIN"]), remove);


/**
 * @swagger
 * tags:
 *   name: Regions
 *   description: 🗺 Region management API
 *
 * /region:
 *   get:
 *     summary: 📌 Get all regions
 *     description: Fetch all regions from the database.
 *     tags: [Regions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: ✅ List of regions retrieved successfully
 *       500:
 *         description: 🔥 Internal server error
 *
 *   post:
 *     summary: ➕ Create a new region
 *     description: Admins can create a new region.
 *     tags: [Regions]
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
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Tashkent"
 *     responses:
 *       201:
 *         description: 🎉 Region created successfully
 *       400:
 *         description: 🚨 Validation error
 *       403:
 *         description: ⛔ Unauthorized access
 *       500:
 *         description: 🔥 Internal server error
 *
 * /region/{id}:
 *   get:
 *     summary: 📍 Get a specific region by ID
 *     description: Retrieve details of a region by its ID.
 *     tags: [Regions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: ✅ Region details retrieved successfully
 *       404:
 *         description: ❌ Region not found
 *       500:
 *         description: 🔥 Internal server error
 *
 *   patch:
 *     summary: ✏️ Update a region
 *     description: Admins can update region details.
 *     tags: [Regions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Fergana"
 *     responses:
 *       200:
 *         description: ✅ Region updated successfully
 *       400:
 *         description: 🚨 Validation error
 *       403:
 *         description: ⛔ Unauthorized access
 *       404:
 *         description: ❌ Region not found
 *       500:
 *         description: 🔥 Internal server error
 *
 *   delete:
 *     summary: ❌ Delete a region
 *     description: Admins can delete a region.
 *     tags: [Regions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: ✅ Region deleted successfully
 *       403:
 *         description: ⛔ Unauthorized access
 *       404:
 *         description: ❌ Region not found
 *       500:
 *         description: 🔥 Internal server error
 */


export default route;
