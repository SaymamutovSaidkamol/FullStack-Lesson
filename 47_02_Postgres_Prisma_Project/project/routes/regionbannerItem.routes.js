import { Router } from "express";
import {
  create,
  remove,
} from "../controllers/regionbannerItem.controller.js";

import authentication from "../middlewares/authentication.js"

let route = Router();

route.post("/",authentication, create);
route.delete("/:id", authentication, remove);

/**
 * @swagger
 * tags:
 *   name: RegionBannerItems
 *   description: 🌍 Banner-Region linking management API
 *
 * /regionbanneritems:
 *   post:
 *     summary: ➕ Create a new region-banner item
 *     description: Users can link a banner to a specific region.
 *     tags: [RegionBannerItems]
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
 *               - regionId
 *             properties:
 *               bannerId:
 *                 type: integer
 *                 example: 10
 *               regionId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: 🎉 Region-banner item created successfully
 *       400:
 *         description: 🚨 Validation error
 *       500:
 *         description: 🔥 Internal server error
 *
 * /regionbanneritems/{id}:
 *   delete:
 *     summary: ❌ Delete a region-banner item
 *     description: Users can remove the link between a banner and a region.
 *     tags: [RegionBannerItems]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: RegionBannerItem ID
 *     responses:
 *       200:
 *         description: ✅ Region-banner item deleted successfully
 *       404:
 *         description: ❌ Region-banner item not found
 *       500:
 *         description: 🔥 Internal server error
 */



export default route;
