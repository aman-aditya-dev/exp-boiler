module.exports=(app)=>{
var CartController = require('../controllers/Cart.controller.js');

    /*
    * GET
    */
    app.get('/allCarts', CartController.list);

    /*
    * GET
    */
    app.get('/showCart/:id', CartController.show);

    /*
    * POST
    */
    app.post('/addCart', CartController.create);

    /*
    * PUT
    */
    app.put('/updateCart/:id', CartController.update);

    /*
    * DELETE
    */
    app.delete('/removeCart:id', CartController.remove);
}
