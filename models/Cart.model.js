var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    user_fub_id: String,
    user_fub_address: String,
    product_id: String,
    product_cost: String,
    product_image: String,

});

module.exports = mongoose.model('CartSchema', CartSchema);