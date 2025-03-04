import { json, where } from "sequelize";
import logger from "../log/logger.js";
import Users from "../models/user.model.js";
// import { error } from "winston";

async function findAll(req, res) {
  try {
    let all = await Users.findAll();
    logger.info(`Method: ${req.method} All`);
    res.send(all);
  } catch (e) {
    res.send(e);
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;
    let OneUser = await Users.findOne({ where: { id } });

    if (!OneUser) {
      logger.error(`Error Method: ${req.method} One, User not found`);
      return res.send({ error: "User not found" });
    }

    logger.info(`Method: ${req.method} One, User ${JSON.stringify(OneUser)}`);
    res.send(OneUser);
  } catch (e) {
    res.send(e);
  }
}

async function create(req, res) {
  try {
    let { user_name } = req.body;
    let chek_user = await Users.findOne({ where: { user_name } });

    if (chek_user) {
      logger.error(`Error Method: ${req.method}, This user exists.`);
      return res.send({ error: "This user exists" });
    }
    let create = await Users.create(req.body);

    logger.info(
      `Method: ${req.method};` +
        ` URL: ${req.originalUrl};` +
        ` Body: ${JSON.stringify(req.body)}`
    );

    res.send({ data: "create" });
  } catch (e) {
    res.send(e);
  }
}

async function BuySell(req, res) {
  try {
    let { buy, sell } = req.body;
    let { id } = req.params;

    let chek_user = await Users.findOne({ where: { id } });
    if (!chek_user) {
      logger.error(`Error Method: ${req.method}, User not found.`);
      return res.send({ error: "User not found" });
    }

    if (buy) {
      let user_count = chek_user.dataValues.count;
      console.log(user_count);

      if (buy > user_count) {
        logger.error(
          `Error Method: ${req.method},  User: ${JSON.stringify(
            chek_user.dataValues
          )};  buy: ${buy};  Userni tavari yetmaydi.`
        );
        return res.send({ error: "Userni tavari yetmaydi" });
      }
      let count = chek_user.dataValues.count - buy;

      await Users.update({ count }, { where: { id } });
      let UpdateUser = await Users.findOne({ where: { id } });

      logger.info(
        `Method: ${
          req.method
        }, Sotilgan tavar = ${buy};  Qolgan tavar = ${count};  User: ${JSON.stringify(
          UpdateUser
        )}`
      );

      return res.send({ data: "Sotildi" });
    } else if (sell) {
      let user_count = chek_user.dataValues.count;
      console.log(user_count);

      if (sell < 0) {
        logger.error(
          `Error Method: ${req.method},  User: ${JSON.stringify(
            chek_user.dataValues
          )};  sell: ${sell};  Sotib olib bulmaydi.`
        );
        return res.send({ error: "Xato son kritildi" });
      }
      let count = chek_user.dataValues.count + sell;

      await Users.update({ count }, { where: { id } });
      let UpdateUser = await Users.findOne({ where: { id } });

      logger.info(
        `Method: ${
          req.method
        }, Sotib olingan tavar = ${sell};  Jami tavar = ${count};  User: ${JSON.stringify(
          UpdateUser
        )}`
      );

      return res.send({ data: "Sotib olindi" });
    }
  } catch (e) {
    res.send(e);
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let chek_user = await Users.findOne({ where: { id } });

    if (!chek_user) {
      logger.error(`Error Method: ${req.method}, User not found`);
      return res.send({ error: "User not found" });
    }

    await Users.update(req.body, { where: { id } });
    logger.info(`Method: ${req.method}, User ${JSON.stringify(req.body)}`);
    res.send({ data: "update" });
  } catch (e) {
    res.send(e);
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let chek_user = await Users.findOne({ where: { id } });

    if (!chek_user) {
      logger.error(`Error Method: ${req.method}, User not found`);
      return res.send({ error: "User not found" });
    }

    await Users.destroy({ where: { id } });
    logger.info(
      `Method: ${req.method}, User ${JSON.stringify(chek_user.dataValues)}`
    );
    res.send({ data: "removed" });
  } catch (e) {
    res.send(e);
  }
}

export { findAll, findOne, create, update, remove, BuySell };
