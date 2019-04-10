const productController = require('./../controllers/product.controller')

module.exports = (router) => {
    router.route('/products').get(productController.getAll);
    router.route('/product/:id').get(productController.getById);
    router.route('/product/:name').get(productController.getByName);
    router.route('/product').post(productController.addProduct);
    router.route('/product/:id').put(productController.updateProduct);
    router.route('/product/:id').delete(productController.deleteProduct);
}