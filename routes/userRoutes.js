const express = require("express");
const router = express.Router();
const User = require("../models/user"); //impotation of 'User' model

//********************************************************** */
//GET method using find() to 'Read' all documents from the database.
router.get("/", async (req, res) => {
  try {
    const user = await User.find(); //it takes time to find, so 'await'
    res.send(user); //when you find it, send it to the client
  } catch (error) {
    console.log(error.message); //show us the error in this transaction, if any.
  }
});
//********************************************************** */

//********************************************************** */
//POST method for creating new document
router.post("/", async (req, res, next) => {
  //it is a non-blocking or asychronous operation.
  try {
    const user = new User(req.body); //get the data to be created.
    const result = await user.save(); //wait while it is saved.
    res.send(result); //this line is for personal troubleshooting. The created document is sent to my browser.
  } catch (error) {
    console.log(error.message);
  }
});
//********************************************************** */

//********************************************************** */
//PUT method for updating a document
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id; // the document is recognized by its id attribute.
    const update = req.body; // the content to be updated resides here.
    const result = await User.findOneAndUpdate({ _id: id }, update, {
      new: true, //include this change in the updated document.
    });

    if (!result) {
      return res.status(404).send("User not found"); //return this if the id does not match any existing user.
    }

    res.send(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//********************************************************** */

//********************************************************** */
//DELETE method for deleting a resource by id.
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    // Use findByIdAndDelete to delete the user with the specified ID
    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send("User not found"); //if no id matches.
    }

    res.send("Deleted successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error"); //server error
  }
});
//********************************************************** */

module.exports = router;
