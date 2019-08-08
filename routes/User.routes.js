module.exports = (app) => {
    var UserController = require('../controllers/User.controller.js');

    /*
     * GET
     */
    app.get('/allUsers', UserController.list);

    /*
     * GET
     */
    app.get('/showUser/:id', UserController.show);

    /*
     * POST
     */
    app.post('/addUser', UserController.create);

    /*
     * PUT
     */
    app.put('/updateUser/:id', UserController.update);

    /*
     * DELETE
     */
    app.delete('/removeUser/:id', UserController.remove);
}