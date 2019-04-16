const config = require('./../config').get(process.env.NODE_ENV);

const mongoose = require('mongoose');

mongoose.connect(config.DATABASE, {useNewUrlParser: true});

mongoose.set('useCreateIndex',true);

mongoose.connection.on('connected', function () {    
    console.log('\nMongoose connection open');  
});    

mongoose.connection.on('error',function (err) {    
    console.log('\nMongoose connection error: ' + err);  
});    
 
mongoose.connection.on('disconnected', function () {    
    console.log('\nMongoose connection disconnected');  
});

module.exports = mongoose;