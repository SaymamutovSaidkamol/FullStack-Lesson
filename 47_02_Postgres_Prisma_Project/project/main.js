import express from "express";
import mainRoute from "./routes/index.js";
import { PrismaClient } from "@prisma/client";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


let app = express();
const client = new PrismaClient();

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Open BUdjet",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:4000/",
      },
      ],
      components: {
          securitySchemes: {
              bearerAuth: {
                  type: "http",
                  scheme: "bearer",
                  bearerFormat: "JWT", 
                  description: "Enter JWT token. Example: 'Bearer eyJhbGciOiJIUzI1...'",
              },
          },
      },
      security: [{ bearerAuth: [] }], 
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(express.json());
app.use(mainRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(4000, () => {
  console.log("Server started on port 4000🟢");
});

export { client };
