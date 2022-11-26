const express = require('express');
const router = express.Router();
const db = require('../config/mongoose');
const Todo = require('../models/todo');

router.use(express.urlencoded())

const homeController = require('../controller/home_controller');

var todolocal;

console.log("Router loaded for home.");

router.get('/', async function (req, res, next) {

  //Fetching data from database:

  await Todo.find({}, function (err, todo) {
    if (err) {
      console.log('Error in fetching');
      return;
    }
    todolocal = todo;

  }).clone().catch(function (err) { console.log(err) });


  res.locals.todo = todolocal;

  next();
}, homeController.home);

router.post('/create_task', function (req, res) {

  Todo.create({
    description: req.body.description,
    Category: req.body.Category,
    due_date: req.body.due_date
  }, function (err, newTodo) {
    if (err) {
      console.log('Error in creating task', err.message);

      
      return res.json(err.message);
    }


    return res.redirect('back');
  })

});



//DELETE TASK ROUTE
router.get('/delete-task', function (req, res) {

  console.log("Deleting body: ", req.query);

  Todo.findByIdAndDelete(req.query.id, function (err) {
    if (err) {
      console.log("Error in Deleting");
      return;
    }
    console.log("Data deleted");

    return res.redirect('back');


  });


});


module.exports = router;