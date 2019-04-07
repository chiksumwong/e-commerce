const config = require('./../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./../models/user.model')

module.exports = {
    getById,
    addUser,
    login
};

async function login(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;

    const user = await User.findOne({ email:email });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ user_id: user.id }, config.JWT_SECRET_KEY);
        return res.status(200).json({ token: token });
    }
}

async function addUser(req, res, next) {
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
    return await User.findById(req.body.id);
}