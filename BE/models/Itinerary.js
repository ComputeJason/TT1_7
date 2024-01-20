const sequelize = require("./../connection");
const { DataTypes } = require("sequelize");
const ItineraryDestination = require("./ItineraryDestination");

const Itinerary = sequelize.define(
    "itinerary",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        country_id: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        budget: {
            type: DataTypes.FLOAT,
        },
        title: {
            type: DataTypes.STRING(100),
        },
    },
    {
        tableName: "itinerary",
        timestamps: false,
    }
);

Itinerary.hasMany(ItineraryDestination, {
    foreignKey: "itinerary_id",
});

module.exports = Itinerary;
