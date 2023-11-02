// Import required modules
const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of the Express application
const port= 3000;// Port on which the server will run

const bodyParser = require('body-parser');
//Import database config using Mongoose
const db = require('./config/mongoose');


// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));


// middleware use express router
app.use('/products', require('./routes/products'));

// Start the server and listen on the specified port
app.listen(port, function(err) {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    // Server is running successfully
    console.log(`Server is running on port : ${port}`);
});