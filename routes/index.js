const user = require('./user.router');
const product = require('./product.router');
const order = require('./order.router');

module.exports = (router) => {
    user(router);
    product(router);
    order(router);
}