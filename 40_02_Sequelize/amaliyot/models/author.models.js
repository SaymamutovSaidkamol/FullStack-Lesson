import { type } from "os";
import { Sequelize, DataTypes } from "sequelize";

const Sequelize = new Sequelize("mysql::memory:")

const Author = Sequelize.define(
    "author",
    {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }
)