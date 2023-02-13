const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect(process.env.MONGO_DB_URL);
};

module.exports = connect;
