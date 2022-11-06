const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((server) => {
      console.log(
        `Db connected successfully with host ${server.connection.host}`
      );
    })
    .catch((err) => {
      console.log(`Error occered in DB connection : ${err}`);
    });
};
module.exports = connectDB;
