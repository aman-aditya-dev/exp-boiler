var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

    var UserSchema = new Schema({
        name : String, 
 		password : String, 
 		isActive : Boolean, 
 		
    });

module.exports = mongoose.model('User', UserSchema);