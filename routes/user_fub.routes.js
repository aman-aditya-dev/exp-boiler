module.exports = (app) => {
    var User_fubController = require('../controllers/User_fub.controller.js');

    /*
     * GET
     */
    app.get('/allUser_fubs', User_fubController.list);
    app.post('/login', User_fubController.login);

    /*
     * GET
     */
    app.get('/showUser_fub/:id', User_fubController.show);

    /*
     * POST
     */
    app.post('/addUser_fub', User_fubController.create);

    /*
     * PUT
     */
    app.put('/updateUser_fub/:id', User_fubController.update);

    /*
     * DELETE
     */
    app.delete('/removeUser_fub:id', User_fubController.remove);
}