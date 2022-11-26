const express = require('express');
const path = require('path');

const port = 8000;

// const db =  require('./config/mongoose');
// const Contact = require('./models/contact');
const app = express();
//Use express router

app.use('/', require('./routes'))


//Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


//Access Static files
app.use(express.static('assets'));




app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})