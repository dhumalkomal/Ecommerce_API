// Import the required module
const Product = require('../models/products');

// function to show all the products
module.exports.products = async function(req, res) {
    try{

        const foundProducts = await Product.find({});// Use await to handle the promise
        res.send(foundProducts);
    }
    catch(err) {
        res.status(500).send(err.message);
    }
};

// function to create the Products
module.exports.create =async function(req, res) {
    try {
       
        const product = new Product({ 
            name : req.body.name, 
            quantity: req.body.quantity
         });

        await product.save();
        // res.json({ product });
        res.json({message:'New product added successfully'})
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }   
};

// function to delete a product using it's ID
module.exports.delete =async function (req, res) {
    try {

        await Product.findByIdAndRemove(req.params.id);
        res.json({ message: 'Product deleted' });
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// function to update a product's quantity
module.exports.updateQunatity =async function(req, res){
    try {

        const { id } = req.params;
        const { number } = req.query;
        const product = await Product.findById(id);
        product.quantity += parseInt(number);
        await product.save();
        res.json({ product,
                   message: 'Updated successfully'
                });
    } 
    catch (err) {
        res.status(500).json({ 
            error: err.message 
        });
    }
};