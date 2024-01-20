const sequelize = require("./../connection");
const { DataTypes } = require("sequelize");

const ItineraryDestination = sequelize.define(
    "itinerary_destination",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        itinerary_id: {
            type: DataTypes.INTEGER,
        },
        destination_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "itinerary_destination",
        timestamps: false,
    }
);

module.exports = ItineraryDestination;
