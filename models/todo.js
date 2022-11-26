/* this is the mongoose module */

const mongoose = require("mongoose");

/* creatig our schema, Since description is requiered, I have marked it as true */
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: false,
  },
  due_date: {
    type: String,
    required: false,
  },
});

/* creating our model with "todoSchema" as Schema */

const Todo = mongoose.model("Todo", todoSchema);

/* exporting our model so that it can be used by index.js */

module.exports = Todo;
