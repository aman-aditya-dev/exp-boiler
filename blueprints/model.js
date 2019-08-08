function createModel(name, field, type) {
    var modelName = name.charAt(0).toUpperCase() + name.slice(1);
    var schemaType = "";
    for (let i = 0; i < field.length; i++) {
        schemaType += `${field[i]} : ${type[i]}, \n \t\t`
    }
    return (`var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

    var ${modelName}Schema = new Schema({
        ${schemaType}
    });

module.exports = mongoose.model('${modelName}', ${modelName}Schema);`)
}

module.exports = createModel;