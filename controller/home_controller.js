/* database model */
const { model } = require("mongoose");
/* database model */
const Todo = require("../models/todo");

module.exports.home = function(req, res, next){


 // Sending title and tashList value to ejs file.
  res.render('homepage',{
    title: 'To-Do',
    taskList: res.locals.todo
    
  });
}

module.exports.createTask = function (req, res) {
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
}

module.exports.deleteTask = function (req, res) {
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
}