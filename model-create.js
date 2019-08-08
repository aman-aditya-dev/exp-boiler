const fs = require('fs');
fs.mkdir("controllers", createController);
fs.mkdir("models", createModel);
fs.mkdir("routes", createRoutes);
console.log(process.argv);
var modelName = process.argv[2];
var arrayLength = process.argv[process.argv.length - 1];
var arrayChange = process.argv;
arrayChange.splice(0, 3);
arrayChange.splice(-1, 1);
var fieldsName = arrayChange.slice(0, arrayLength);
var types = arrayChange.slice(arrayLength);
console.log("mN", modelName);
console.log("fieldsName", fieldsName);
console.log("types", types);

function createController() {
    var myController = require('./blueprints/controller');
    fs.writeFile(`./controllers/${modelName}.controller.js`, myController(modelName, fieldsName, types), (err) => {
            if (err) throw err;
        })
        // fs.appendFile('./index.js', `\n require('./app/routes/${modelName}.routes.js')(app);`);
}

function createModel() {
    var model = require('./blueprints/model');
    fs.writeFile(`./models/${modelName}.model.js`, model(modelName, fieldsName, types), (err) => {
        if (err) throw err;
    })
}

function createRoutes() {
    var myRoutes = require('./blueprints/routes');
    fs.writeFile(`./routes/${modelName}.routes.js`, myRoutes(modelName, fieldsName, types), (err) => {
        if (err) throw err;
    })
    updateIndex();
}

function updateIndex() {
    var datas = fs.readFileSync('./index.js').toString().split("\n");
    datas.splice(24 - 1, 0, `require('./routes/${modelName}.routes.js')(app);`);
    var text = datas.join("\n");

    fs.writeFile('./index.js', text, function(err) {
        if (err) return console.log(err);
    });
}