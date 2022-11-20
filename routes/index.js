const express = require('express');

const router = express.Router();

router.use(express.urlencoded())

const homeController = require('../controller/home_controller');

var taskList = [];

console.log("Router loaded for home.");

router.get('/', function(req, res, next){

    res.locals.taskList = taskList;
    next();
}, homeController.home);

router.post('/create_task', function(req, res){

    console.log("request body: ", req.body.description);
   taskList.push(req.body)
  res.redirect('back');
});

module.exports = router;