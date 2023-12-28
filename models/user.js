const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Defination of user schema fields
  name: String,
  age: Number,
  profession: String,
  product: {
    type: String,
    required: true, //I want to know the kind of product (phone) the user has...it is required field.
  },
});

//creating a model instance with already existing schema (userSchema)
const User = mongoose.model("User", userSchema);

//exportation of the "User" model
module.exports = User;
