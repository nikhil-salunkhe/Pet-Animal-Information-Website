// config/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.TAG_MUSIC_DB,
  process.env.TAG_USERNAME,
  process.env.TAG_PASSWORD,
  {
    host: process.env.TAG_HOST,
    dialect: "mysql",
    port: 3306,
  }
);

sequelize
  .authenticate()
  .then((result) => {
    console.log("TagloyUploadMusic mysql connected successful");
  })
  .catch((err) => {
    console.log("err", err);
  });

  const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorial = require("../models/tutorial")(sequelize, Sequelize);
db.petInfo = require("../models/pets_info")(sequelize, Sequelize);
db.petType = require("../models/pet_types")(sequelize, Sequelize);



module.exports = db;