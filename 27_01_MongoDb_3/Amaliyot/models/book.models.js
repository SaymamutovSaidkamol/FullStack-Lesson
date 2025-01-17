import { required } from "joi";
import { Schema, model } from "mongoose";

let authorSchema = new Schema({
    name: {
        type: String,
        maxlength: 20,
        minlength: 2,
        required: true
    },
    born: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required :true
    },
    genre: []

})

let authorModel = model("author", authorSchema)

export default authorModel