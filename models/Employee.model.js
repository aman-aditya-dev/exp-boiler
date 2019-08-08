var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

    var EmployeeSchema = new Schema({
        name : String, 
 		eid : String, 
 		department : String, 
 		isActive : Boolean, 
 		
    });

module.exports = mongoose.model('Employee', EmployeeSchema);