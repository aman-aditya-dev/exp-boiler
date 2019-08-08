 var User_fubModel = require('../models/User_fub.model.js');

 /**
  * User_fubController.js
  *
  * @description :: Server-side logic for managing User_fub.
  */
 module.exports = {

     /**
      * User_fubController.list()
      */
     list: function(req, res) {
         User_fubModel.find(function(err, User_fub) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting User_fub.',
                     error: err
                 });
             }
             return res.json(User_fub);
         });
     },
     login: function(req, res) {
         var cred;
         var password = req.body.password;
         var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
         reg.test(req.body.email) ? cred = "email" : cred = "username";
         User_fubModel.findOne({
             [cred]: req.body.email }, function(err, User) {
             if (err) {
                 return res.status(500).json({
                     message: `Error when getting ${cred}.`,
                     error: err
                 });
             }
             if (!User) {
                 return res.status(404).json({
                     message: `Wrong ${cred}`
                 });
             } else {
                 if (User.password === password) {
                     return res.status(200).json({
                         User: User,
                         message: 'Sucessful Login'
                     });
                 } else {
                     return res.status(404).json({
                         message: 'Wrong Password'
                     });
                 }

             }
         })
     },

     /**
      * User_fubController.show()
      */
     show: function(req, res) {
         var id = req.params.id;
         User_fubModel.findOne({ _id: id }, function(err, User_fub) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting User_fub.',
                     error: err
                 });
             }
             if (!User_fub) {
                 return res.status(404).json({
                     message: 'No such User_fub'
                 });
             }
             return res.json(User_fub);
         });
     },

     /**
      * User_fubController.create()
      */
     create: function(req, res) {
         var User_fub = new User_fubModel({
             username: req.body.username,
             password: req.body.password,
             name: req.body.name,
             location: req.body.location,
             address: req.body.address,
             last_active: req.body.last_active,
             updated_at: req.body.updated_at,
             cart: req.body.cart,
             photo: req.body.photo,
             wallet: req.body.wallet,
             buyingHistory: req.body.buyingHistory,
             contact_number: req.body.contact_number,
             email: req.body.email,
             total_discount_availed: req.body.total_discount_availed,
             referral_code: req.body.referral_code,
             referral_code_received: req.body.referral_code_received,
             isReferred: req.body.isReferred,
         });

         User_fub.save(function(err, User_fub) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when creating User_fub',
                     error: err
                 });
             }
             return res.status(201).json(User_fub);
         });
     },

     /**
      * User_fubController.update()
      */
     update: function(req, res) {
         var id = req.params.id;
         User_fubModel.findOne({ _id: id }, function(err, User_fub) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting User_fub',
                     error: err
                 });
             }
             if (!User_fub) {
                 return res.status(404).json({
                     message: 'No such User_fub'
                 });
             }

             User_fub.username = req.body.username ? req.body.username : User_fub.username;
             User_fub.password = req.body.password ? req.body.password : User_fub.password;
             User_fub.name = req.body.name ? req.body.name : User_fub.name;
             User_fub.location = req.body.location ? req.body.location : User_fub.location;
             User_fub.address = req.body.address ? req.body.address : User_fub.address;
             User_fub.last_active = req.body.last_active ? req.body.last_active : User_fub.last_active;
             User_fub.updated_at = req.body.updated_at ? req.body.updated_at : User_fub.updated_at;
             User_fub.cart = req.body.cart ? req.body.cart : User_fub.cart;
             User_fub.photo = req.body.photo ? req.body.photo : User_fub.photo;
             User_fub.wallet = req.body.wallet ? req.body.wallet : User_fub.wallet;
             User_fub.buyingHistory = req.body.buyingHistory ? req.body.buyingHistory : User_fub.buyingHistory;
             User_fub.contact_number = req.body.contact_number ? req.body.contact_number : User_fub.contact_number;
             User_fub.email = req.body.email ? req.body.email : User_fub.email;
             User_fub.total_discount_availed = req.body.total_discount_availed ? req.body.total_discount_availed : User_fub.total_discount_availed;
             User_fub.referral_code = req.body.referral_code ? req.body.referral_code : User_fub.referral_code;
             User_fub.referral_code_received = req.body.referral_code_received ? req.body.referral_code_received : User_fub.referral_code_received;
             User_fub.isReferred = req.body.isReferred ? req.body.isReferred : User_fub.isReferred;

             User_fub.save(function(err, User_fub) {
                 if (err) {
                     return res.status(500).json({
                         message: 'Error when updating User_fub.',
                         error: err
                     });
                 }

                 return res.json(User_fub);
             });
         });
     },

     /**
      * User_fubController.remove()
      */
     remove: function(req, res) {
         var id = req.params.id;
         User_fubModel.findByIdAndRemove(id, function(err, User_fub) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when deleting the User_fub.',
                     error: err
                 });
             }
             return res.status(204).json();
         });
     },
     /**
      * Cart_User_fubController.list()
      */
     cartList: function(req, res) {
         var id = req.params.id;
         User_fubModel.findOne({ _id: id }, function(err, User) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Fub Users.',
                     error: err
                 });
             }
             if (!User) {
                 return res.status(404).json({
                     message: 'No such Users'
                 });
             }
             return res.json(User.cart);
         });
     },
     cartShow: function(req, res) {
         var id = req.params.id;
         var bid = req.params.bid;
         User_fubModel.findOne({ _id: id }, function(err, User) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting User.',
                     error: err
                 });
             }
             if (!User) {
                 return res.status(404).json({
                     message: 'No such User'
                 });
             }
             res.json(User).cart.findOne({ _id: bid }, function(err, Cart) {
                 if (err) {
                     return res.status(500).json({
                         message: 'Error when getting Cart for this User.',
                         error: err
                     });
                 }
                 if (!Cart) {
                     return res.status(404).json({
                         message: 'No such Cart'
                     });
                 }
             })
         });
     },

 };