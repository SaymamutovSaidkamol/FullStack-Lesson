import { Router } from "express";
import {
  create,
  findAll,
} from "../controllers/tranzaction.controller.js";

import authentication from "../middlewares/authentication.js"

let route = Router();

route.get("/", authentication, findAll);
route.post("/",authentication, create);

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: 💰 Transaction management API
 *
 * /tranzaction:
 *   get:
 *     summary: 📜 Get all transactions
 *     description: Fetch all transactions from the database.
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: ✅ List of transactions retrieved successfully
 *       500:
 *         description: 🔥 Internal server error
 *
 *   post:
 *     summary: ➕ Create a new transaction
 *     description: Users can create a new transaction.
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - authorId
 *               - bannerId
 *               - summa
 *               - comment
 *             properties:
 *               authorId:
 *                 type: integer
 *                 example: 1
 *               bannerId:
 *                 type: integer
 *                 example: 5
 *               summa:
 *                 type: number
 *                 format: float
 *                 example: 150.75
 *               comment:
 *                 type: string
 *                 example: "Payment for banner advertisement"
 *     responses:
 *       201:
 *         description: 🎉 Transaction created successfully
 *       400:
 *         description: 🚨 Validation error
 *       500:
 *         description: 🔥 Internal server error
 */


export default route;
