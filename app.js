var express = require('express');
var app = express();
var db = require('./db');

// Route Files
let articles = require('./routes/articles');
var UserController = require('./user/UserController');
app.use('/articles', articles);
app.use('/users', UserController);

module.exports = app;


