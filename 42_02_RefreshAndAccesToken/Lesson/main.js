import express from "express";
import sequelize from "./config/db.js";
import mainRoute from "./routes/index.js";

let app = express();
app.use(express.json());

async function Bootstrapt() {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.sync();
    console.log("Connect db");

    app.listen(3001, () => {
      console.log("Server startdet on port 3001");
    });
  } catch (e) {
    console.log(e);
  }
}

app.use(mainRoute);

Bootstrapt();
