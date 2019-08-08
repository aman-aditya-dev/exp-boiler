module.exports=(app)=>{
var EmployeeController = require('../controllers/Employee.controller.js');

    /*
    * GET
    */
    app.get('/allEmployees', EmployeeController.list);

    /*
    * GET
    */
    app.get('/showEmployee/:id', EmployeeController.show);

    /*
    * POST
    */
    app.post('/addEmployee', EmployeeController.create);

    /*
    * PUT
    */
    app.put('/updateEmployee/:id', EmployeeController.update);

    /*
    * DELETE
    */
    app.delete('/removeEmployee:id', EmployeeController.remove);
}
