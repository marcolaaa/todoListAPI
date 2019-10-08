var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

//dotenv to get the variables in your .env file.  
require('dotenv').config();  
  
//mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb'); 
var myMongoKey = process.env.MYMONGODBKEY;
mongoose.connect('mongodb+srv://marcola:' + myMongoKey + '@todolistapi-unget.mongodb.net/todolistAPI?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);