// Import Controller Object
const userController = require('./../controllers/user.ctrl')

module.exports = (router) => {
    /**
     * get a user
     */
    router.route('/user/:id').get(userController.getUser)

    /**
     * adds a user
     */
    router.route('/user').post(userController.addUser)
}