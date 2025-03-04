import { PrismaClient } from "@prisma/client";
import express from "express";
import MainRoute from "./routes/index.js"

let app = express();
const client = new PrismaClient();

app.use(express.json());
app.use(MainRoute)

app.listen(4000, () => {
  console.log("Started on port 4000🟢");
});

export { client };
