import express from "express";
import dotenv from "dotenv";
import mainRoute from "./routes/index.js";

dotenv.config();

let PORT = process.env.PORT || 3000;
let app = express();

app.use(express.json());

app.use("", mainRoute);

app.listen(PORT, () => {
  console.log(`Server ${PORT} da ishlamoqda...`);
});