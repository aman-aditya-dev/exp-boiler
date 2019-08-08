module.exports = (app) => {
    var CategoriesController = require('../controllers/Categories.controller.js');
    var BooksController = require('../controllers/Books.Controller.js')
        /*
         * GET
         */
    app.get('/allCategories', CategoriesController.list);

    /*
     * GET
     */
    app.get('/showCategories/:id', CategoriesController.show);

    /*
     * POST
     */
    app.post('/addCategories', CategoriesController.create);

    /*
     * PUT
     */
    app.put('/updateCategories/:id', CategoriesController.update);

    /*
     * DELETE
     */
    app.delete('/removeCategories/:id', CategoriesController.remove);
    app.put('/addbooks/:id', BooksController.create);
}