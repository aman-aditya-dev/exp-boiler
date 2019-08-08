 var UserModel = require('../models/User.model.js');

 /**
  * UserController.js
  *
  * @description :: Server-side logic for managing User.
  */
 module.exports = {

     /**
      * UserController.list()
      */
     list: function(req, res) {
         UserModel.find(function(err, User) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting User.',
                     error: err
                 });
             }
             return res.json(User);
         });
     },


     /**
      * UserController.show()
      */
     show: function(req, res) {
         var id = req.params.id;
         UserModel.findOne({ _id: id }, function(err, User) {
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
             return res.json(User);
         });
     },

     /**
      * UserController.create()
      */
     create: function(req, res) {
         var User = new UserModel({
             name: req.body.name,
             password: req.body.password,
             isActive: req.body.isActive,


         });

         User.save(function(err, User) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when creating User',
                     error: err
                 });
             }
             return res.status(201).json(User);
         });
     },

     /**
      * UserController.update()
      */
     update: function(req, res) {
         var id = req.params.id;
         UserModel.findOne({ _id: id }, function(err, User) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting User',
                     error: err
                 });
             }
             if (!User) {
                 return res.status(404).json({
                     message: 'No such User'
                 });
             }

             User.name = req.body.name ? req.body.name : User.name;
             User.password = req.body.password ? req.body.password : User.password;
             User.isActive = req.body.isActive ? req.body.isActive : User.isActive;;


             User.save(function(err, User) {
                 if (err) {
                     return res.status(500).json({
                         message: 'Error when updating User.',
                         error: err
                     });
                 }

                 return res.json(User);
             });
         });
     },

     /**
      * UserController.remove()
      */
     remove: function(req, res) {
         var id = req.params.id;
         UserModel.findByIdAndRemove(id, function(err, User) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when deleting the User.',
                     error: err
                 });
             }
             return res.status(204).json();
         });
     }


 };