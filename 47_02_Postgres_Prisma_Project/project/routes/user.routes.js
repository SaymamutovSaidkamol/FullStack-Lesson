import { Router } from "express";
import { Register } from "../controllers/register.controller.js";
import { verify } from "../controllers/verifyUser.controller.js";
import { login } from "../controllers/login.controller.js";
import { findAll, findOne } from "../controllers/user.controller.js";

import authentication from "../middlewares/authentication.js";
import authorization from "../middlewares/authorization.js";

let route = Router();

route.get("/", authentication, authorization(["ADMIN"]), findAll);
route.get("/:id", authentication, findOne);
route.post("/register", Register);
route.post("/verify", verify);
route.post("/login", login);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 👥 Get All Users
 *     description: Retrieve a list of users with optional filters and pagination.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination.
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *         description: Number of users per page.
 *     responses:
 *       200:
 *         description: ✅ List of users retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   example: 50
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 take:
 *                   type: integer
 *                   example: 10
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       404:
 *         description: ❌ No users found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No users found."
 *       500:
 *         description: ❌ Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."

 * @swagger
 * /users/{id}:
 *   get:
 *     summary: 👤 Get a Single User
 *     description: Retrieve details of a single user by ID.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user.
 *     responses:
 *       200:
 *         description: ✅ User retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: ❌ User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User not found."
 *       500:
 *         description: ❌ Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."

 * @swagger
 * /users/register:
 *   post:
 *     summary: 📝 Register a New User
 *     description: Create a new user by providing necessary details.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - phone
 *               - email
 *               - password
 *               - regionId
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               phone:
 *                 type: string
 *                 example: "+998901234567"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "SecurePass123!"
 *               regionId:
 *                 type: integer
 *                 example: 1
*               role:
*                 type: string
*                 example: ["ADMIN", "USER"]
 *     responses:
 *       201:
 *         description: ✅ User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: ❌ Invalid request data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid data provided."
 *       500:
 *         description: ❌ Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."

 * @swagger
 * /users/login:
 *   post:
 *     summary: 🔑 User Login
 *     description: Authenticate a user and return an access token.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "cryptouchun07@gmail.com"
 *               password:
 *                 type: string
 *                 example: "#Abcd123$"
 *     responses:
 *       200:
 *         description: ✅ Login successful, token returned.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: ❌ Invalid credentials.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid email or password."
 *       500:
 *         description: ❌ Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."
 */


/**
 * @swagger
 * /users/verify:
 *   post:
 *     summary: ✅ Verify User
 *     description: Verify a user using a verification code.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "johndoe@example.com"
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: ✅ Verification successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User verified successfully."
 *       400:
 *         description: ❌ Invalid verification code or email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid verification code."
 *       500:
 *         description: ❌ Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error."
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         firstName:
 *           type: string
 *           example: "John"
 *         lastName:
 *           type: string
 *           example: "Doe"
 *         phone:
 *           type: string
 *           example: "+998901234567"
 *         email:
 *           type: string
 *           format: email
 *           example: "johndoe@example.com"
 *         regionId:
 *           type: integer
 *           example: 1
 *         role:
 *           type: string
 *           example: "USER"
 *         status:
 *           type: string
 *           example: "ACTIVE"
 */


export default route;
