const express = require('express');
const router = express.Router();
const Products  = require('../models/products');

// create a new product
router.post('/', async (req, res) => {
    const product = new Products({
        name: req.body.name,
        price: req.body.price
    })
    try{
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})
// get all the products present
router.get('/', async (req, res) => {
    try{
        const products = await Products.find();
        res.json(products);
    }
    catch{
        res.status(500).json({message: err.message});
    }
})
// modify the product of the given product id
router.patch('/:id', (req, res) => {
    req.params.id
})
// delete the product of the given product id
router.delete('/:id', (req, res) => {

})
module.exports = router