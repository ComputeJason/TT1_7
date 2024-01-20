const Sequelize = require("sequelize");
const path = require("path");
const fs = require("fs");
require("dotenv").config();
// import { fileURLToPath } from "url";
// import { join, dirname } from "path";

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
    dialectOptions: {
        multipleStatements: true,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database: ", error);
    });

try {
    const filePath = path.resolve(__dirname, "./tecktrek24.sql");
    const dataSql = fs.readFileSync(filePath, { encoding: "utf8" }).toString();
    // const initSql = fs.readFileSync(join(__dirname, "techtrek24.sql"), "utf8");
    sequelize.query(dataSql);
} catch (error) {
    console.error("Initialization failed:", error);
}

module.exports = sequelize;
