import joi from "joi";

const VipRoomValidation = joi.object({
  room_comp: joi.string().required(),
  count: joi.number().required(),
  price: joi.number().precision(2).required(),
  img: joi.string(),
  status: joi.string().valid("Empty", "Busy").required(),
  Characteristics: joi.string().required(),
  orderscomps: joi.any().required(),
});

const VipRoomPatchValidation = joi.object({
  status: joi.boolean().valid("Empty", "Busy").required(),
});
export { VipRoomValidation, VipRoomPatchValidation };
