const mongoose = require('mongoose');

// Define the schema for the product collection
const productSchema= new mongoose.Schema({
    name: String,
    quantity: Number

}, {
    versionKey: false
});

// Create the 'Product' model based on the schema
const Product = mongoose.model('Product', productSchema);


module.exports = Product;