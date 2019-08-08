 var EmployeeModel = require('../models/Employee.model.js');

 /**
  * EmployeeController.js
  *
  * @description :: Server-side logic for managing Employee.
  */
 module.exports = {

     /**
      * EmployeeController.list()
      */
     list: function(req, res) {
         EmployeeModel.find(function(err, Employee) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Employee.',
                     error: err
                 });
             }
             return res.json(Employee);
         });
     },

     /**
      * EmployeeController.show()
      */
     show: function(req, res) {
         var id = req.params.id;
         EmployeeModel.findOne({ _id: id }, function(err, Employee) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Employee.',
                     error: err
                 });
             }
             if (!Employee) {
                 return res.status(404).json({
                     message: 'No such Employee'
                 });
             }
             return res.json(Employee);
         });
     },

     /**
      * EmployeeController.create()
      */
     create: function(req, res) {
         var Employee = new EmployeeModel({
             name: req.body.name,
             eid: req.body.eid,
             department: req.body.department,
             isActive: req.body.isActive,
         });

         Employee.save(function(err, Employee) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when creating Employee',
                     error: err
                 });
             }
             return res.status(201).json(Employee);
         });
     },

     /**
      * EmployeeController.update()
      */
     update: function(req, res) {
         var id = req.params.id;
         EmployeeModel.findOne({ _id: id }, function(err, Employee) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when getting Employee',
                     error: err
                 });
             }
             if (!Employee) {
                 return res.status(404).json({
                     message: 'No such Employee'
                 });
             }

             Employee.name = req.body.name ? req.body.name : Employee.name;
             Employee.eid = req.body.eid ? req.body.eid : Employee.eid;
             Employee.department = req.body.department ? req.body.department : Employee.department;
             Employee.isActive = req.body.isActive ? req.body.isActive : Employee.isActive;;


             Employee.save(function(err, Employee) {
                 if (err) {
                     return res.status(500).json({
                         message: 'Error when updating Employee.',
                         error: err
                     });
                 }

                 return res.json(Employee);
             });
         });
     },

     /**
      * EmployeeController.remove()
      */
     remove: function(req, res) {
         var id = req.params.id;
         EmployeeModel.findByIdAndRemove(id, function(err, Employee) {
             if (err) {
                 return res.status(500).json({
                     message: 'Error when deleting the Employee.',
                     error: err
                 });
             }
             return res.status(204).json();
         });
     }
 };