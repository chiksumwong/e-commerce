const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        marked_price: { type: Number, required: true},
        selling_price: { type: Number, required: true},
        image: [{ path: {type: String}, timestamp: { type: Date, default: Date.now } }],
        timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);