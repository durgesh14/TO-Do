const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: false
    },
    due_date: {
        type: String,
        required: false
    },
   


});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;