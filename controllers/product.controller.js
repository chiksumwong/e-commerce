const Product = require('./../models/product.model');
const userController = require('./user.controller');

module.exports = {
    getAll,
    getByName,
    getById,
    addProduct,
    updateProduct,
    deleteProduct
};

async function getAll(req, res, next) {
    await Product.find((err, product) => {
        if (err) return res.status(500).json({error_message:err});
        return res.status(200).json(product);
    });
    
}

async function getById(req, res, next) {
    await Product.findById(req.params.id, (err, product) =>{
        if (err) return res.status(500).json({error_message:err});
        return res.status(200).json(product);
    });
}

async function getByName(req, res, next) {
    await Product.find({ name: req.params.name }, (err, product) =>{
        if (err) return res.status(500).json({error_message:err});
        return res.status(200).json(product);
    });
}

async function addProduct(req, res, next) {
    const product = new Product(req.body);
    await product.save((err, product) => {
        if (err) return res.status(500).json({error_message:err});
        // Find user by id then update product list
        userController.updateProductListById(req.body.seller, product);
        return res.status(200).json(product);
    });
}

async function updateProduct(req, res, next) {
    await Product.findByIdAndUpdate(req.params.id, req.body, (err, response) => {
        if (err) return res.status(500).json({error_message:err});
        return res.status(200).json(response);
    });
}

async function deleteProduct(req, res, next) {
    await Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) return res.status(500).json({error_message:err});
        const response = {
            message: "Successfully deleted",
        };
        return res.status(200).json(response);
    });
}