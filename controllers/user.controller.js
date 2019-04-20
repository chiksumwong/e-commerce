const config = require('./../config').get(process.env.NODE_ENV);
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./../models/user.model');

module.exports = {
    register,
    login,
    getById,
    deleteUser,
    // carts
    addProductToCart,
    updateProductInCart,
    // products list
    updateProductListByUserId,
    // orders list
    updateOrderListByUserId
};

async function register(req, res, next) {
    let password = req.body.password;
    if (password) {
        password = bcrypt.hashSync(password, 10);
    }
    let user_info = {
        username: req.body.username,
        password: password,
        email: req.body.email
    };
    const user = new User(user_info);
    await user.save((err, user) => {
        if (err) return res.status(500).json({error_message:err});
        return res.status(200).json(user);
    });
}

async function login(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;

    const user = await User.findOne({ email:email });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ sub: user.id }, config.JWT_SECRET_KEY);
        return res.status(200).json({ user_id:user.id, user_name:user.username, token: token });
    }
    next();
}

async function getById(req, res, next) {
    await User.findById(req.params.id, (err, user) =>{
        if (err) return res.status(500).json({error_message:err});
        return res.status(200).json(user);
    });
}

async function deleteUser(req, res, next) {
    await User.findByIdAndRemove(req.params.id, err => {
        if (err) return res.status(500).json({error_message:err});
        const response = {
            message: "Successfully deleted",
        };
        return res.status(200).json(response);
    });
}

async function addProductToCart(req, res, next) {
    const user_id = req.body.user_id;
    const product_info = {
        product_id: req.body.product_id,
        product_name: req.body.product_name,
        product_image: req.body.product_image,
        selling_price: req.body.selling_price,
        seller: req.body.seller,
        quantity: req.body.quantity,
        is_active: req.body.is_active
    }
    const user = await User.findById(user_id, err =>{
        if (err) return res.status(500).json({error_message:err});
    });
    user.carts.push(product_info);
    await user.save();
    return res.status(200).json(user);
}

async function updateProductInCart(req, res, next) {
    const user = await User.findByIdAndUpdate(req.params.id, { $set:req.body}, err =>{
        if (err) return res.status(500).json({error_message:err});
    });
    return res.status(200).json(user);
}

// Products list
async function updateProductListByUserId(user_id, product) {
    const user = await User.findById(user_id, err =>{
        if (err) return res.status(500).json({error_message:err});
    });
    user.products.push(product);
    return await user.save();
}

// Orders list
async function updateOrderListByUserId(seller_user_id, buyer_user_id, order) {
    // update seller's orders list
    const seller = await User.findById(seller_user_id, err =>{
        if (err) return res.status(500).json({error_message:err});
    });
    seller.orders.push(order);
    await seller.save();
    // update buyer's orders list
    const buyer = await User.findById(buyer_user_id, err =>{
        if (err) return res.status(500).json({error_message:err});
    });
    buyer.orders.push(order);
    await buyer.save();

    return res.status(200).json({message:"done"});
}