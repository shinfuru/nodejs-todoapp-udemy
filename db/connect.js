const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url)
    .then(() => console.log("データベースと接続中・・・"))
    .catch((e) => console.log(e));
};

module.exports = connectDB;