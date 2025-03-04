import MoviesInfo from "../models/movieInfo.model.js";

async function create(req, res) {
  try {
    let body = req.body;
    await MoviesInfo.create(body);
    res.status(201).send({ data: "Created successfully" });
  } catch (error) {
    console.log(error.message);
  }
}

export { create };
