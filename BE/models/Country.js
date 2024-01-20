const sequelize = require("./../connection");
const { DataTypes } = require("sequelize");
const Itinerary = require("./Itinerary");

const Country = sequelize.define(
    "country",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "country",
        timestamps: false,
    }
);

Country.hasMany(Itinerary, {
    foreignKey: "country_id",
});

module.exports = Country;
