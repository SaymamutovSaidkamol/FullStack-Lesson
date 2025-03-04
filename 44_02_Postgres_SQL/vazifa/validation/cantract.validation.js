import joi from "joi"

const CantractValidation = joi.object({
    contractsumma: joi.number().positive().precision(2).required(),
    cantractterm: joi.string().required(),
    playersid: joi.number().positive().required(),
    clubid: joi.number().positive().required(),
})

const CantractPatchValidation = joi.object({
    contractsumma: joi.number().positive().precision(2),
    cantractterm: joi.string(),
    playersid: joi.number().positive(),
    clubid: joi.number().positive(),
})

export {CantractValidation, CantractPatchValidation}