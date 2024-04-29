const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
// to accept json body
app.use(
  express.json({
    limit: "50mb",
  })
);



// Import routes
const routes = require("./routes");

// Make sure to replace v_organization  from another table because it is a view.

const sequelizeDB = require("./config/db.config");
sequelizeDB.sequelize.sync(sequelizeDB);


app.use("/v1", routes);

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Started success on PORT http://localhost:${PORT}`);
});