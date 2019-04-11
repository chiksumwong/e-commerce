const orderController = require('./../controllers/order.controller')

module.exports = (router) => {
    router.route('/order').post(orderController.addOrder);
    router.route('/order/:id').put(orderController.updateOrder);
}