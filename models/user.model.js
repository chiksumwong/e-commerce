const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
        carts:[{ product_id:String, product_name:String, product_image:String, selling_price:Number, quantity: Number, is_active: Boolean }],
        orders:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
        timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);