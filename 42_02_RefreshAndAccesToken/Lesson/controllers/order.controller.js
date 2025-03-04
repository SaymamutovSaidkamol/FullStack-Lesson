import Order from "../models/order.models.js";
import User from "../models/user.models.js";
import {
  OrderPatchValidation,
  OrderValidation,
} from "../validations/order.validation.js";
import logger from "../log/logger.js";

async function findAll(req, res) {
  try {
    let all = await Order.findAll({ include: User });
    logger.info(`Method: ${req.method};  findAll-Order`);
    res.send({ data: all });
  } catch (e) {
    res.send(e);
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;
    let one = await Order.findByPk({ where: { id }, include: User });

    if (!one) {
      logger.info(
        `ERROR: User not found;  Method: ${req.method};  findOne-Order`
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
    let { error, value } = OrderValidation.validate(req.body);

    if (error) {
      logger.info(
        `ERROR: ${error.details[0].message};  Method: ${req.method};  Create-Order`
      );
      return res.send({ error: error.details[0].message });
    }

    await Order.create(value);
    res.send({ data: "create" });
    logger.info(`Method: ${req.method};  Create-ACCES`);
  } catch (e) {
    res.send(e);
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let { error, value } = OrderPatchValidation.validate(req.body);

    if (error) {
      logger.info(
        `ERROR: ${error.details[0].message};  Method: ${req.method};  Update-Order`
      );
      return res.send({ error: error.details[0].message });
    }

    let chek_orders = await Order.findOne({ where: { id } });

    if (!chek_orders) {
      logger.info(
        `ERROR: User not found;  Method: ${req.method};  Update-Order`
      );
      return res.send({ error: "User not found" });
    }

    await Order.update(value, { where: { id } });

    res.send({ data: "Updated" });
  } catch (e) {
    res.send(e);
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let chek_orders = await Order.findOne({ where: { id } });

    if (!chek_orders) {
      logger.info(
        `ERROR: User not found;  Method: ${req.method};  Delete-Order`
      );
      return res.send({ error: "User not found" });
    }

    await Order.destroy({ where: { id } });

    res.send({ data: "Deleted" });
  } catch (e) {
    res.send({ error });
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

    let order = await Order.findAll({
      where: newQuery,
      include: { model: User, as: "Userlar" },
    });

    if (!order) {
      return res.status(401).send({ error: "Movies not found" });
    }
    res.status(200).send({ data: order });
  } catch (e) {
    res.send(e);
  }
}

export { findAll, findOne, create, update, remove, Search };
