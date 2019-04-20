const orderController = require('./../controllers/order.controller')

module.exports = (router) => {
    router.route('/order').post(orderController.addOrder);
    router.route('/order/:id').put(orderController.updateOrder);
    // get order by user id
    router.route('/orders/:user_id').get(orderController.getOrderByUserId);
    // get product order by seller id (user id)
    router.route('/productOrders/:seller_id').get(orderController.getOrderBySellerId);
}