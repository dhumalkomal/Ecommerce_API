// import require module express framework
const express = require('express');
// create new router instance
const router = express.Router();

// Define routes using middleware

// initializing products controller
const productController = require('../controllers/product_controller');

// to get all the products
router.get('/', productController.products);

// to create a products
router.post('/create', productController.create);

//  to delete products
router.delete('/:id' , productController.delete)

// to update quantity of a product (can be incremented or decremented)
router.post('/:id/update_quantity', productController.updateQunatity);

// Export the router to make it available for use in other files
module.exports = router;