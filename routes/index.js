/* This is for importing express */
const express = require("express");
/* This is creating router object */
const router = express.Router();
/* database Configuration */
const db = require("../config/mongoose");
/* database model */
const Todo = require("../models/todo");
/* using url encoder to get the query params */
router.use(express.urlencoded());
/* Using controller */
const homeController = require("../controller/home_controller");

var todolocal;

console.log("Router loaded for home.");

/* homepage of our app */
router.get(
  "/",
  async function (req, res, next) {
    //Fetching data from database:
    /* finding all the todo list in database to show them up on the page */

    await Todo.find({}, function (err, todo) {
      /* if error occurs */
      if (err) {
        console.log("Error in fetching");
        return;
      }
      /* else */
      todolocal = todo;
    })
      .clone()
      .catch(function (err) {
        console.log(err);
      });

    res.locals.todo = todolocal; //sending todolocal value to controller

    next();
  },
  homeController.home
);

/* route for creating a task */
router.post("/create_task", homeController.createTask);


//DELETE TASK ROUTE
router.get("/delete-task", homeController.deleteTask);

module.exports = router;
