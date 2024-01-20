const sequelize = require("./../connection");
const { DataTypes } = require("sequelize");
const Itinerary = require("./Itinerary");
const Destination = require("./Destination");

const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING(50),
        },
        last_name: {
            type: DataTypes.STRING(50),
        },
        password: {
            type: DataTypes.STRING(20),
        },
        username: {
            type: DataTypes.STRING(20),
        },
    },
    {
        tableName: "user",
        timestamps: false,
    }
);

User.hasMany(Itinerary, {
    foreignKey: "user_id",
});

User.hasMany(Destination, {
    foreignKey: "destination_id",
});

module.exports = User;
