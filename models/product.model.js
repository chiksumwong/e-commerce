const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
        name: { type: String, unique: true, required: true },
        description: { type: String, required: true },
        marked_price: { type: Number, required: true},
        selling_price: { type: Number, required: true},
        image: { type: String, required: true},
        timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);