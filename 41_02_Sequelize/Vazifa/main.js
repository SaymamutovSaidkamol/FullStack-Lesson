import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";
import mainRoute from "./routes/index.js";

dotenv.config();

let PORT = process.env.PORT || 3001;
let app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);
app.use(express.json());

app.use("/api", mainRoute);

async function bootstarpt() {
  try {
    await sequelize.sync({ force: true });
    console.log("Connect to db ");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

bootstarpt();
