function createController(name, fields, type) {
    // console.log(name);
    var controllerName = name.charAt(0).toUpperCase() + name.slice(1);
    var toSave = "";
    var toUpdate = "";
    for (var i = 0; i < fields.length; i++) {
        toSave += ` ${fields[i]} : req.body.${fields[i]},\n \t\t`;
        toUpdate += `${controllerName}.${fields[i]} = req.body.${fields[i]} ? req.body.${fields[i]} : ${controllerName}.${fields[i]};\n \t\t`;
    }
    return (

        ` var ${controllerName}Model = require('../models/${controllerName}.model.js');

    /**
     * ${controllerName}Controller.js
     *
     * @description :: Server-side logic for managing ${controllerName}.
     */
    module.exports = {

        /**
         * ${controllerName}Controller.list()
         */
        list: function (req, res) {
            ${controllerName}Model.find(function (err, ${controllerName}) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when getting ${controllerName}.',
                        error: err
                    });
                }
                return res.json(${controllerName});
            });
        },

        /**
         * ${controllerName}Controller.show()
         */
        show: function (req, res) {
            var id = req.params.id;
            ${controllerName}Model.findOne({ _id: id }, function (err, ${controllerName}) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when getting ${controllerName}.',
                        error: err
                    });
                }
                if (!${controllerName}) {
                    return res.status(404).json({
                        message: 'No such ${controllerName}'
                    });
                }
                return res.json(${controllerName});
            });
        },

        /**
         * ${controllerName}Controller.create()
         */
        create: function (req, res) {
            var ${controllerName} = new ${controllerName}Model({
               ${toSave}

            });

            ${controllerName}.save(function (err, ${controllerName}) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when creating ${controllerName}',
                        error: err
                    });
                }
                return res.status(201).json(${controllerName});
            });
        },

        /**
         * ${controllerName}Controller.update()
         */
        update: function (req, res) {
            var id = req.params.id;
            ${controllerName}Model.findOne({ _id: id }, function (err, ${controllerName}) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when getting ${controllerName}',
                        error: err
                    });
                }
                if (!${controllerName}) {
                    return res.status(404).json({
                        message: 'No such ${controllerName}'
                    });
                }

                    ${toUpdate};
              
			
                ${controllerName}.save(function (err, ${controllerName}) {
                    if (err) {
                        return res.status(500).json({
                            message: 'Error when updating ${controllerName}.',
                            error: err
                        });
                    }

                    return res.json(${controllerName});
                });
            });
        },

        /**
         * ${controllerName}Controller.remove()
         */
        remove: function (req, res) {
            var id = req.params.id;
            ${controllerName}Model.findByIdAndRemove(id, function (err, ${controllerName}) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when deleting the ${controllerName}.',
                        error: err
                    });
                }
                return res.status(204).json();
            });
        }
    };`
    )
}
module.exports = createController;