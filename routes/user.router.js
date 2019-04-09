const userController = require('./../controllers/user.controller')

module.exports = (router) => {
    router.route('/register').post(userController.register);
    router.route('/login').post(userController.login);
    router.route('/user/:id').get(userController.getById);
}