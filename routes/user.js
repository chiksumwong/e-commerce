// Import Controller Object
const userController = require('./../controllers/user.controller')

module.exports = (router) => {
    /**
     * get a user
     */
    router.route('/user/:id').get(userController.getUser)

    /**
     * adds a user
     */
    router.route('/registration').post(userController.addUser)
}