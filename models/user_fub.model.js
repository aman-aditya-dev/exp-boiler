var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CartSchema = require('./Cart.model.js');

var User_fubSchema = new Schema({
    username: String,
    password: String,
    name: String,
    location: String,
    address: Array,
    last_active: Date,
    updated_at: Date,
    cart: [],
    photo: String,
    wallet: String,
    buyingHistory: Array,
    contact_number: String,
    email: String,
    total_discount_availed: String,
    referral_code: String,
    referral_code_received: String,
    isReferred: Boolean

});

module.exports = mongoose.model('User_fub', User_fubSchema);