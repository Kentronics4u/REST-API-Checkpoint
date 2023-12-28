const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database")); //alert us that we're connected

module.exports = connectDB;
