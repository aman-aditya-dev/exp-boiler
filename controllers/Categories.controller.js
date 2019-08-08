 var { CategoriesModel } = require('../models/Categories.model.js');
 /**
  * CategoriesController.js
  *
  * @description :: Server-side logic for managing Categories.
  */
 module.exports = {

     /**
      * CategoriesController.list()
      */
     list: function(req, res) {
         CategoriesModel.find(function(err, Categories) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Categories.',
                     error: err
                 });
             }
             return res.json(Categories);
         });
     },

     /**
      * CategoriesController.show()
      */
     show: function(req, res) {
         var id = req.params.id;
         CategoriesModel.findOne({ _id: id }, function(err, Categories) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Categories.',
                     error: err
                 });
             }
             if (!Categories) {
                 return res.status(404).json({
                     message: 'No such Categories'
                 });
             }
             return res.json(Categories);
         });
     },

     /**
      * CategoriesController.create()
      */
     create: function(req, res) {
         var Categories = new CategoriesModel({
             name: req.body.name,
             createdAt: req.body.createdAt,
             updatedAt: req.body.updatedAt,
             booksCount: req.body.booksCount,
             availableBooksCount: req.body.availableBooksCount,
             books: req.body.books,
         });

         Categories.save(function(err, Categories) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when creating Categories',
                     error: err
                 });
             }
             return res.status(201).json(Categories);
         });
     },

     /**
      * CategoriesController.update()
      */
     update: function(req, res) {
         var id = req.params.id;
         CategoriesModel.findOne({ _id: id }, function(err, Categories) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Categories',
                     error: err
                 });
             }
             if (!Categories) {
                 return res.status(404).json({
                     message: 'No such Categories'
                 });
             }

             Categories.name = req.body.name ? req.body.name : Categories.name;
             Categories.createdAt = req.body.createdAt ? req.body.createdAt : Categories.createdAt;
             Categories.updatedAt = req.body.updatedAt ? req.body.updatedAt : Categories.updatedAt;
             Categories.booksCount = req.body.booksCount ? req.body.booksCount : Categories.booksCount;
             Categories.availableBooksCount = req.body.availableBooksCount ? req.body.availableBooksCount : Categories.availableBooksCount;
             Categories.books = req.body.books ? req.body.books : Categories.books;


             Categories.save(function(err, Categories) {
                 if (err) {
                     return res.status(500).json({
                         message: 'Error when updating Categories.',
                         error: err
                     });
                 }
                 return res.json(Categories);
             });
         });
     },

     /**
      * CategoriesController.remove()
      */
     remove: function(req, res) {
         var id = req.params.id;
         CategoriesModel.findByIdAndRemove(id, function(err, Categories) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when deleting the Categories.',
                     error: err
                 });
             }
             return res.status(204).json();
         });
     }
 };