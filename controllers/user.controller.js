const User = require('./../models/user.model.js')

module.exports = {
    getAllUser: (req, res, next) => {
        User.findAll().then
        ((err, users)=> {
            if (err)
                res.send(err)
            else if (!user)
                res.send(404)
            else
                res.send(users)
            next()            
        })
    },

    getUser: (req, res, next) => {
        User.findById(req.params.id).then
        ((err, user)=> {
            if (err)
                res.send(err)
            else if (!user)
                res.send(404)
            else
                res.send(user)
            next()            
        })
    },

    addUser: (req, res, next) => {
        new User(req.body).save((err, newUser) => {
            if (err)
                res.send(err)
            else if (!newUser)
                res.send(400)
            else
                res.send(newUser)
            next()
        });
    },

}