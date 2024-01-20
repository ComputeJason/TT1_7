const sequelize = require("./../connection");
const { DataTypes } = require("sequelize");
const ItineraryDestination = require("./ItineraryDestination");

const Destination = sequelize.define(
    "destination",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        country_id: {
            type: DataTypes.INTEGER,
        },
        cost: {
            type: DataTypes.FLOAT,
        },
        name: {
            type: DataTypes.STRING(50),
        },
        notes: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "destination",
        timestamps: false,
    }
);

Destination.hasMany(ItineraryDestination, {
    foreignKey: "destination_id",
});

module.exports = Destination;
