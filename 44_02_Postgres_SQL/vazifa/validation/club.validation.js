import joi from "joi"

const ClubValidation = joi.object({
    clubname: joi.string().required(),
    playersid: joi.number().positive().required()
})

const ClubPatchValidation = joi.object({
    clubname: joi.string().required(),
    playersid: joi.number().positive().required()
})

export {ClubValidation, ClubPatchValidation}