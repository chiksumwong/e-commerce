const User = require('./../models/user.model.js')

function insert() {
 
    var user = new User({
        username : 'Sam',                
        password: 'abcd',                          
        email: "sam@example.com",                              
        timestamp : new Date()                      
    });

    user.save(function (err, res) {

        if (err) {
            console.log("\nError:" + err);
        }
        else {
            console.log("\nRes:" + res);
        }

    });
}

insert();