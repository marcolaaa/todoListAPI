const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

//created models loading here
const Task = require('./api/models/todoListModel');
const User = require('./api/models/userModel');

const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

//dotenv to get the variables in your .env file.  
require('dotenv').config();  
  
//mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb'); 
const myMongoKey = process.env.MYMONGODBKEY;
mongoose.connect('mongodb+srv://marcola:' + myMongoKey + '@todolistapi-unget.mongodb.net/todolistAPI?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing routes
const todoListRoutes = require('./api/routes/todoListRoutes'); 
const userRoutes = require('./api/routes/userRoutes');

//register the routes
todoListRoutes(app);
userRoutes(app);

// use JWT auth to secure the api
app.use(jwt());

// global error handler
app.use(errorHandler);

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
