import { Router } from "express";
import upload from "../config/multer.js";

let uploadIMGRoute = Router();

uploadIMGRoute.post("/", upload.single("img"), (req, res) => {
  if (!req.file) {
    return res.status(404).json({error: "No file uploaded."});
  }
  res.status(201).send({ message: `IMG uploaded: ${req.file.filename}` });
});

export default uploadIMGRoute;
