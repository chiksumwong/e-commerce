const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
        products:[{product_id:String, quantity: Number, seller: String}],
        total_amount: { type: Number, required: true},
        buyer: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
        address: {type:String, required:true},
        phone_number:{type:String, required:true},
        payment_method:{type:Number, require:true},
        order_states: { type: Number, required: true},
        timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);