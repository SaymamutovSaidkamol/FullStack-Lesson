import Order from "../models/order.models.js";
import {
  OrdinaryPatchValidation,
  OrdinaryValidation,
} from "../validations/ordinary.validation.js";
import logger from "../log/logger.js";
import OrdernaryRoom from "../models/ordinary_room.models.js";
import OrderComp from "../models/order_comp.models.js";

async function findAll(req, res) {
  try {
    let all = await OrdernaryRoom.findAll();
    logger.info(`Method: ${req.method};  findAll-OrdernaryRoom`);
    res.send({ data: all });
  } catch (e) {
    res.send(e);
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;
    console.log(id);

    let one = await OrdernaryRoom.findOne({ where: { id } });

    if (!one) {
      logger.info(
        `ERROR: User not found;  Method: ${req.method};  findOne-OrdernaryRoom`
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
    let { error, value } = OrdinaryValidation.validate(req.body);

    if (error) {
      logger.info(
        `ERROR: ${error.details[0].message};  Method: ${req.method};  Create-OrdernaryRoom-Order`
      );
      return res.send({ error: error.details[0].message });
    }

    let { compNumber, price, type, img, status, Characteristics, orderscomps } =
      value;

    let chek_room = await OrdernaryRoom.findOne({ where: { compNumber } });

    // if (chek_room) {
    //   logger.info(
    //     `ERROR: This room is occupied.;  Method: ${req.method};  Create-OrdernaryRoom-Order`
    //   );
    //   return res.send({ error: "This room is occupied." });
    // }

    let new_rom = await OrdernaryRoom.create({
      compNumber,
      price,
      type,
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
      ordinary_roomId: new_rom.id,
    })
    
    res.send({ data: "Created" });
    logger.info(`Method: ${req.method};  Create-OrdernaryRoom-ACCES`);
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

    let order = await OrdernaryRoom.findAll({
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

    let { error, value } = OrdinaryPatchValidation.validate(req.body);

    if (error) {
      logger.info(
        `ERROR: ${error.details[0].message};  Method: ${req.method};  Update-Order`
      );
      return res.send({ error: error.details[0].message });
    }

    let chek_orders = await OrdernaryRoom.findOne({ where: { id } });

    if (!chek_orders) {
      logger.info(
        `ERROR: User not found;  Method: ${req.method};  Update-Order`
      );
      return res.send({ error: "User not found" });
    }

    await OrdernaryRoom.update(value, { where: { id } });

    res.send({ data: "Updated" });
  } catch (e) {
    res.send({ e });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let chek_orders = await OrdernaryRoom.findOne({ where: { id } });

    if (!chek_orders) {
      logger.info(
        `ERROR: User not found;  Method: ${req.method};  Update-Order`
      );
      return res.send({ error: "User not found" });
    }

    await OrdernaryRoom.destroy({ where: { id } });
    logger.info(
      `Method: ${req.method};  Delete-OrdernaryRoom-ACCES`
    );
    res.send({data: "Deleted"})
  } catch (e) {
    res.send({ e });
  }
}

export { findAll, findOne, create, Search, update, remove };
