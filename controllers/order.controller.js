const Order = require('./../models/order.model');
const userController = require('./user.controller');

module.exports = {
    addOrder,
    updateOrder
};

async function addOrder(req, res, next) {
    const order = new Order(req.body);

    await order.save((err, order) => {
        if (err) return res.status(500).json({error_message:err});

        // Find seller and buyer by id then update order list
        let products = order.products
        products.forEach(product => {
            userController.updateOrderListByUserId(product.seller, order.buyer, order);
        });

        return res.status(200).json(order);
    });
}

async function updateOrder(req, res, next) {
    await Order.findByIdAndUpdate(req.params.id, {$set:req.body}, (err, order) => {
        if (err) return res.status(500).json({error_message:err});
        return res.status(200).json(order);
    });
}