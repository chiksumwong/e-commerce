const User = require('./../models/user.model.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

module.exports = {

    addUser: (req, res, next) => {

        let user = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });

        user.save(function (err, res) {
            if (err) {
                console.log("\nError:" + err);
            }
            else {
                console.log("\nRes:" + res);
            }
            next();
        });
    },

    login: (req, res, next) => {
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

    logout: (req, res, next) => {
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

    getById: (id) => {
        return await User.findById(id).select('-hash');
    }

}