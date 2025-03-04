import Order from "../models/order.models.js";
import {
  VipRoomPatchValidation,
  VipRoomValidation,
} from "../validations/vip_room.validation.js";
import logger from "../log/logger.js";
import VipRoom from "../models/vip_room.models.js";
import OrderComp from "../models/order_comp.models.js";

async function findAll(req, res) {
  try {
    let all = await VipRoom.findAll();
    logger.info(`Method: ${req.method};  findAll-VipRoom`);
    res.send({ data: all });
  } catch (e) {
    res.send(e);
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;
    console.log(id);

    let one = await VipRoom.findOne({ where: { id } });

    if (!one) {
      logger.info(
        `ERROR: User not found;  Method: ${req.method};  findOne-VipRoom`
      );
      return res.send({ error: "User not found" });
    }
    res.send({ data: one });
  } catch (e) {
    res.send(e);
  }
}

async function create(req, res) {
  try {
    let { error, value } = VipRoomValidation.validate(req.body);

    if (error) {
      logger.info(
        `ERROR: ${error.details[0].message};  Method: ${req.method};  Create-VipRoom-Order`
      );
      return res.send({ error: error.details[0].message });
    }

    let { room_comp, price, count, img, status, Characteristics, orderscomps } =
      value;

    let chek_room = await VipRoom.findOne({ where: { room_comp } });

    if (chek_room) {
      logger.info(
        `ERROR: This room is occupied.;  Method: ${req.method};  Create-VipRoom-Order`
      );
      return res.send({ error: "This room is occupied." });
    }

    img = req.file || img;
    let new_rom = await VipRoom.create({
      room_comp,
      count,
      price,
      img,
      status,
      Characteristics,
    });

    await OrderComp.create({
      start: orderscomps[0].start,
      end: orderscomps[0].end,
      vip: orderscomps[0].vip,
      summa: orderscomps[0].summa,
      orderId: orderscomps[0].orderId,
      vip_roomId: new_rom.id,
    });

    res.send({ data: "Created" });
    logger.info(`Method: ${req.method};  Create-VipRoom-ACCES`);
  } catch (e) {
    res.send(e);
  }
}

async function Search(req, res) {
  try {
    let query = req.query;
    let keys = Object.keys(query);
    let values = Object.values(query);
    let newQuery = {};
    values.forEach((val, index) => {
      if (val) {
        newQuery[keys[index]] = val;
      }
    });

    let order = await VipRoom.findAll({
      where: newQuery,
    });

    if (!order) {
      return res.status(401).send({ error: "Ordery room not found" });
    }
    res.status(200).send({ data: order });
  } catch (e) {
    res.send(e);
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let { error, value } = VipRoomPatchValidation.validate(req.body);

    if (error) {
      logger.info(
        `ERROR: ${error.details[0].message};  Method: ${req.method};  Update-Order`
      );
      return res.send({ error: error.details[0].message });
    }

    let chek_orders = await VipRoom.findOne({ where: { id } });

    if (!chek_orders) {
      logger.info(
        `ERROR: User not found;  Method: ${req.method};  Update-Order`
      );
      return res.send({ error: "User not found" });
    }

    await VipRoom.update(value, { where: { id } });

    res.send({ data: "Updated" });
  } catch (e) {
    res.send({ e });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let chek_orders = await VipRoom.findOne({ where: { id } });

    if (!chek_orders) {
      logger.info(
        `ERROR: User not found;  Method: ${req.method};  Update-Order`
      );
      return res.send({ error: "User not found" });
    }

    await VipRoom.destroy({ where: { id } });
    logger.info(
      `Method: ${req.method};  Delete-VipRoom-ACCES`
    );
    res.send({data: "Deleted"})
  } catch (e) {
    res.send({ e });
  }
}

export { findAll, findOne, create, Search, update, remove };
