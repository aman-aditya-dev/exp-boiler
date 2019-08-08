 var CartModel = require('../models/Cart.model.js');

 /**
  * CartController.js
  *
  * @description :: Server-side logic for managing Cart.
  */
 module.exports = {

     /**
      * CartController.list()
      */
     list: function(req, res) {
         CartModel.find(function(err, Cart) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Cart.',
                     error: err
                 });
             }
             return res.json(Cart);
         });
     },

     /**
      * CartController.show()
      */
     show: function(req, res) {
         var id = req.params.id;
         CartModel.findOne({ _id: id }, function(err, Cart) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Cart.',
                     error: err
                 });
             }
             if (!Cart) {
                 return res.status(404).json({
                     message: 'No such Cart'
                 });
             }
             return res.json(Cart);
         });
     },

     /**
      * CartController.create()
      */
     create: function(req, res) {
         var Cart = new CartModel({
             user_fub_id: req.body.user_fub_id,
             user_fub_address: req.body.user_fub_address,
             product_id: req.body.product_id,
             product_cost: req.body.product_cost,
             product_image: req.body.product_image,


         });

         Cart.save(function(err, Cart) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when creating Cart',
                     error: err
                 });
             }
             return res.status(201).json(Cart);
         });
     },

     /**
      * CartController.update()
      */
     update: function(req, res) {
         var id = req.params.id;
         CartModel.findOne({ _id: id }, function(err, Cart) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Cart',
                     error: err
                 });
             }
             if (!Cart) {
                 return res.status(404).json({
                     message: 'No such Cart'
                 });
             }

             Cart.user_fub_id = req.body.user_fub_id ? req.body.user_fub_id : Cart.user_fub_id;
             Cart.user_fub_address = req.body.user_fub_address ? req.body.user_fub_address : Cart.user_fub_address;
             Cart.product_id = req.body.product_id ? req.body.product_id : Cart.product_id;
             Cart.product_cost = req.body.product_cost ? req.body.product_cost : Cart.product_cost;
             Cart.product_image = req.body.product_image ? req.body.product_image : Cart.product_image;;


             Cart.save(function(err, Cart) {
                 if (err) {
                     return res.status(500).json({
                         message: 'Error when updating Cart.',
                         error: err
                     });
                 }

                 return res.json(Cart);
             });
         });
     },

     /**
      * CartController.remove()
      */
     remove: function(req, res) {
         var id = req.params.id;
         CartModel.findByIdAndRemove(id, function(err, Cart) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when deleting the Cart.',
                     error: err
                 });
             }
             return res.status(204).json();
         });
     }
 };