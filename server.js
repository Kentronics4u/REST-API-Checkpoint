const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoutes");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/connect"); //import the database connection.
const notFound = require("./unknown/notFound"); //import the unknown page route.

// 'app.use(express.json())' is used to parse incoming requests with JSON payloads and makes it available in the req.body property.
app.use(express.json());

//*********************************************************************** */
// Routes
app.use("/api/v1/users", userRoute);
app.use(notFound); // if no other route matches, output this route.
//*********************************************************************** */

//*********************************************************************** */
// Starting the server while the database boots up
const serverDB = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
    await connectDB();
  } catch (error) {
    console.log(error);
  }
};
//*********************************************************************** */

serverDB(); //call the start-up function
