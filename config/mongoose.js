// Import the Mongoose library for MongoDB
const mongoose=require('mongoose');

// Define the MongoDB connection URI
mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce_API');  // Connection URL for the MongoDB database

mongoose.connect( 'mongodb+srv://EcommerceAPI:Ecommerce1910@cluster0.mlnediy.mongodb.net/?retryWrites=true&w=majority');

// Get the default connection
const db =  mongoose.connection;

// Event listener for connection error
db.on('error', console.error.bind(console, 'Error Connecting on mongoose'));

// Event listener for successful connection
db.once('open', function(){
    console.log("Connected to mongoDB!");
});

// Export the database connection to make it available for use in other files
module.exports= db;