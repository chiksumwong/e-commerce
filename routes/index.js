const user = require('./user.router');
const product = require('./product.router');

module.exports = (router) => {
    user(router)
    product(router)
}