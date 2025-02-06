import express from "express";

import AllRoute from "./routes/index.js";

let app = express();

app.use(express.json());

app.use("/", AllRoute);

app.listen(3004, () => {
  console.log("Server 3000 portda ishlamoqda...");
});
