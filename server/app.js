var express = require('express');
var path = require('path');
var createError = require('http-errors');

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../client/build/'));
app.set('view engine', 'jade');

app.use('/static',
        express.static(path.join(__dirname, '../client/build/static/'))
);

// TODO: remove this after development is done
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-with');
  next();
});

app.use('/', indexRouter);
app.use('/news', newsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
