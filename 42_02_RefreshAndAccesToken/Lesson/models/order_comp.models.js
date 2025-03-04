import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Order from "./order.models.js"
import OrdernaryRoom from "./ordinary_room.models.js";
import VipRoom from "./vip_room.models.js";

let OrderComp = sequelize.define("order_comps", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  start: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end: {
    type: DataTypes.STRING,
      allowNull: false,
  },
  vip: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  summa: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: "id"
    }
  },
  vip_roomId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: VipRoom,
      key: "id"
    }
  },
  ordinary_roomId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: OrdernaryRoom,
      key: "id"
    }
  },
});

OrderComp.belongsTo(Order, { foreignKey: "orderId", onDelete: "CASCADE", onUpdate: "CASCADE" });
Order.hasMany(OrderComp, {foreignKey: "orderId"})

OrderComp.belongsTo(VipRoom, {foreignKey: "vip_roomId", onDelete: "CASCADE", onUpdate: "CASCADE" })
VipRoom.hasMany(OrderComp, {foreignKey: "vip_roomId"})

OrderComp.belongsTo(OrdernaryRoom, {foreignKey: "ordinary_roomId", onDelete: "CASCADE", onUpdate: "CASCADE" })
OrdernaryRoom.hasMany(OrderComp, {foreignKey: "ordinary_roomId"})

export default OrderComp;
