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
router.post("/create_task", function (req, res) {
  /* creating in the database */
  Todo.create(
    {
      description: req.body.description,
      Category: req.body.Category,
      due_date: req.body.due_date,
    },
    function (err, newTodo) {
      /* if there is some error in creating the task */

      if (err) {
        console.log("Error in creating task", err.message);

        return res.json(err.message);
      }

      /* else return to the home page "back" */

      return res.redirect("back");
    }
  );
});


//DELETE TASK ROUTE
router.get("/delete-task", function (req, res) {
  console.log("Deleting body: ", req.query);
  //Deleting the node having id == req.query.id
  Todo.findByIdAndDelete(req.query.id, function (err) {
    /* on error */
    if (err) {
      console.log("Error in Deleting");
      return;
    }
    /* if no error */

    console.log("Data deleted");

    return res.redirect("back");
  });
});

module.exports = router;
