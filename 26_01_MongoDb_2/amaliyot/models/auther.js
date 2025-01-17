import { model, Schema } from "mongoose";

const authorSchema = new Schema({
    name: String,
    born: String,
    genre: [],
    },
    {timestamps: true, versionKey: false}
)

const authorModel = model("author", authorSchema)

export default authorModel