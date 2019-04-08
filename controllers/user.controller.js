const config = require('./../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./../models/user.model')

module.exports = {
    register,
    login,
    getById
};

async function login(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;

    const user = await User.findOne({ email:email });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ sub: user.id }, config.JWT_SECRET_KEY);
        return res.status(200).json({ user_id:user.id, token: token });
    }
    next();
}

async function register(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    // hash password
    if (password) {
        password = bcrypt.hashSync(password, 10);
    }

    let user = new User({
        username: username,
        password: password,
        email: email
    });

    await user.save(function (err, res) {
        if (err) {
            console.log("\nError:" + err);
        }
        else {
            console.log("\nRes:" + res);
        }
        next();
    });
}

async function getById(req, res, next) {
    const user = await User.findById(req.params.id);
    return res.status(200).json({ username: user.username, email: user.email });
}