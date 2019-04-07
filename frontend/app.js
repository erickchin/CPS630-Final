//Dependencies

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*

//Mongo DB Dependencies
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
*/


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

/*
//Database Setup
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'forge';

//Creating a new Mongo client
const client = new MongoClient(url);

//Connecting to Mongo
/*client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to MongoDB");

  const db = client.db(dbName);

  client.close();
});
*/



//Routes Setup
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var database = require('./database');
const transactRouter = require('./routes/transaction');

//Routes Use
app.use('/', indexRouter);
app.use('/Overview', indexRouter);

// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  next(createError(404));
}); */

/* JBAJADA ADDED */
//Dependencies
//const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const app = express();
const cors = require('cors');
const ServerPortRouter = require('./routes/ServerPortRouter');



// DB config
const db = require('./config/keys').MongoURI;

// connect Mongo
mongoose.connect(db, {useNewUrlParser: true})
    .then(console.log("mongo connected"))
    .catch(err => console.log(err));

//Routes
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/serverport', ServerPortRouter);


//node.js server setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server start on port ${PORT}'));




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

