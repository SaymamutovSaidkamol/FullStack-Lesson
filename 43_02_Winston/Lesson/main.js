import express from "express";
import sequelize from "./config/db.js";
import mainRoute from "./routes/index.js";

let app = express();
app.use(express.json());

async function Connect() {
  try {
    await sequelize.sync();
    console.log("Connect Db");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (e) {
    console.log(e);
  }
}

app.use(mainRoute)
Connect()