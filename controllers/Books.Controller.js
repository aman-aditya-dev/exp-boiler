 var { CategoriesModel } = require('../models/Categories.model.js');
 var { BooksModel } = require('../models/Categories.model.js');

 /**
  * CategoriesController.js
  *
  * @description :: Server-side logic for managing Categories.
  */
 module.exports = {

     /**
      * BooksController.list()
      */
     list: function(req, res) {
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
             return res.json(Categories.books);
         });
     },

     /**
      * CategoriesController.show()
      */
     show: function(req, res) {
         var id = req.params.id;
         var bid = req.params.bid;
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
             res.json(Categories).books.findOne({ _id: bid }, function(err, Books) {
                 if (err) {
                     return res.status(500).json({
                         message: 'Error when getting books.',
                         error: err
                     });
                 }
                 if (!Books) {
                     return res.status(404).json({
                         message: 'No such Book'
                     });
                 }
             })
         });
     },

     /**
      * CategoriesController.create()
      */
     create: function(req, res) {
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
             var Books = new BooksModel({
                 isbn: req.body.isbn,
                 title: req.body.title,
                 subtitle: req.body.subtitle,
                 author: req.body.author,
                 published: req.body.published,
                 publisher: req.body.publisher,
                 pages: req.body.author,
                 description: req.body.description,
                 image: req.body.image
             });
             Categories.books.push(Books);
             Categories.markModified('books');
             Categories.save(function(err, Books) {
                 if (err) {
                     return res.status(500).json({
                         message: 'Error when adding Books',
                         error: err
                     });
                 }
                 return res.status(201).json(Books);
             });
         })
     },

     /**
      * CategoriesController.update()
      */
     //  update: function(req, res) {
     //      var id = req.params.id;
     //      CategoriesModel.findOne({ _id: id }, function(err, Categories) {
     //          if (err) {
     //              return res.status(500).json({
     //                  message: 'Error when getting Categories',
     //                  error: err
     //              });
     //          }
     //          if (!Categories) {
     //              return res.status(404).json({
     //                  message: 'No such Categories'
     //              });
     //          }

     //          Categories.name = req.body.name ? req.body.name : Categories.name;
     //          Categories.createdAt = req.body.createdAt ? req.body.createdAt : Categories.createdAt;
     //          Categories.updatedAt = req.body.updatedAt ? req.body.updatedAt : Categories.updatedAt;
     //          Categories.booksCount = req.body.booksCount ? req.body.booksCount : Categories.booksCount;
     //          Categories.availableBooksCount = req.body.availableBooksCount ? req.body.availableBooksCount : Categories.availableBooksCount;
     //          Categories.books = req.body.books ? req.body.books : Categories.books;


     //          Categories.save(function(err, Categories) {
     //              if (err) {
     //                  return res.status(500).json({
     //                      message: 'Error when updating Categories.',
     //                      error: err
     //                  });
     //              }
     //              return res.json(Categories);
     //          });
     //      });
     //  },

     //  /**
     //   * CategoriesController.remove()
     //   */
     //  remove: function(req, res) {
     //      var id = req.params.id;
     //      CategoriesModel.findByIdAndRemove(id, function(err, Categories) {
     //          if (err) {
     //              return res.status(500).json({
     //                  message: 'Error when deleting the Categories.',
     //                  error: err
     //              });
     //          }
     //          return res.status(204).json();
     //      });
     //  }
 };