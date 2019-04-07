const userController = require('./../controllers/user.controller')

module.exports = (router) => {
    router.route('/user/:id').get(userController.getById);

    router.route('/registration').post(userController.addUser);

    router.route('/login').post(userController.login);

    // router.route('/logout').post(userController.logout);
}