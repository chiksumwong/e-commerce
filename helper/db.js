const config = require('./../config').get(process.env.NODE_ENV);

const mongoose = require('mongoose');

mongoose.connect(config.DATABASE,{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = mongoose;