function createRoutes(name) {
    var controllerName = name.charAt(0).toUpperCase() + name.slice(1);
    return (`module.exports=(app)=>{
var ${controllerName}Controller = require('../controllers/${controllerName}.controller.js');

    /*
    * GET
    */
    app.get('/all${controllerName}s', ${controllerName}Controller.list);

    /*
    * GET
    */
    app.get('/show${controllerName}/:id', ${controllerName}Controller.show);

    /*
    * POST
    */
    app.post('/add${controllerName}', ${controllerName}Controller.create);

    /*
    * PUT
    */
    app.put('/update${controllerName}/:id', ${controllerName}Controller.update);

    /*
    * DELETE
    */
    app.delete('/remove${controllerName}:id', ${controllerName}Controller.remove);
}
`);
}

module.exports = createRoutes;