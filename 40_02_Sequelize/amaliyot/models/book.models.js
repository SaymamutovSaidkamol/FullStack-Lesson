import { timeStamp } from "console";
import { type } from "os";
import { Sequelize, DataTypes } from "sequelize";
import { FOREIGNKEYS } from "sequelize/lib/query-types";

const Sequelize = new Sequelize("mysql::memory:")

const Author = Sequelize.define(
    "author",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: Author,
                key: "id"
            },
        },
    },
    {
        timestamps: true
    }
)

Author.hasMany(Book, {FOREIGNKEY: "userId"})