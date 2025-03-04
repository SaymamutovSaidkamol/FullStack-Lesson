import joi from "joi";

const PlayerValidation = joi.object({
  name: joi.string().required(),
  age: joi.number().required(),
  playersnumber: joi.number().required(),
});

const PlayerPatchValidation = joi.object({
  name: joi.string(),
  age: joi.number(),
  playersnumber: joi.number(),
});

export { PlayerValidation, PlayerPatchValidation };
