/* This is for importing express */
const express = require('express');
const path = require('path');
/* the port on which the server will be working */
const port = 8000;
/* instantializing the app */
const app = express();
//Use express router

app.use('/', require('./routes'))


//Set up the view engine
app.set('view engine', 'ejs');
/* views folder */
app.set('views', './views');


//Access Static files
app.use(express.static('assets'));



/* listening to the port 8000 */

app.listen(port, function(err){
        /* on error */

    if(err){
        console.log(`Error in running server: ${err}`);
    }

        /* on success */
console.log(`Server is running on port: ${port}`);
})