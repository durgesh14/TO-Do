const express = require('express');

const router = express.Router();

const homeController = require('../controller/home_controller');

var taskList = [];

console.log("Router loaded for home.");

router.get('/', homeController.home);



module.exports = router;