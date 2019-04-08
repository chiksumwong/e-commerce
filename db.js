const config = require('./config');

const mongoose = require('mongoose');


// const DB_URL = config.LOCAL_MONGODB_CONNECTION_STRING;
const DB_URL = config.MONGODB_CONNECTION_STRING;

mongoose.connect(DB_URL);

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