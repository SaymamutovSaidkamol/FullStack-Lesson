import express from "express";
import sequelize from "./config/db.js";
import mainRoute from "./routes/index.js"

let app = express();

app.use(express.json());

async function bootstrapt() {
  try {
    // sequelize.sync({force: true})
    sequelize.sync()
    console.log("Connect db");
    
  } catch (error) {
    console.log(error.message);
    
  }
}
bootstrapt()

app.use(mainRoute)

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
