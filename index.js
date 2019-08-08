var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Connected to DB");
    }).catch(err => {
        console.log("Could not connect to db");
        process.exit();
    })
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.json({ "message": "Welcome, your server is up and running" })
})
require('./routes/Cart.routes.js')(app);
require('./routes/user_fub.routes.js')(app);
require('./routes/Categories.routes.js')(app);
require('./routes/User.routes.js')(app);
require('./routes/Employee.routes.js')(app);



app.listen(3000, () => {
        console.log("Server is listening");
    })
    //routes