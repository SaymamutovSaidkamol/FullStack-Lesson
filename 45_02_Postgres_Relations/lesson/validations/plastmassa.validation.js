import joi from "joi";

const PlastmassaValidation = new joi.object({
  code: joi.string().required(),
  name: joi.string().required(),
  colorId: joi.number().required(),
  mator: joi
    .valid(
      "Plastmassa mator",
      "Temir mator",
      "Matorlik",
      "Turba mator",
      "Matorsiz"
    )
    .required(),
  shakli: joi.valid("Dumoloq", "Tortburchak").required(),
  kelganVaqti: joi.number().positive().required(),
  astatka: joi.number().positive().required()
});

const PlastmassaPatchValidation = new joi.object({
  code: joi.string(),
  name: joi.string(),
  colorId: joi.number(),
  mator: joi.valid(
    "Plastmassa mator",
    "Temir mator",
    "Matorlik",
    "Turba mator",
    "Matorsiz"
  ),
  shakli: joi.valid("Dumoloq", "Tortburchak"),
  kelganVaqti: joi.number().positive(),
  astatka: joi.number().positive()
});

export { PlastmassaValidation, PlastmassaPatchValidation };
