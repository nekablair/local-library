const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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

//directions upon using express generator

// create : express-locallibrary-tutorial/
// create : express-locallibrary-tutorial/public/
// create : express-locallibrary-tutorial/public/javascripts/
// create : express-locallibrary-tutorial/public/images/
// create : express-locallibrary-tutorial/public/stylesheets/
// create : express-locallibrary-tutorial/public/stylesheets/style.css
// create : express-locallibrary-tutorial/routes/
// create : express-locallibrary-tutorial/routes/index.js
// create : express-locallibrary-tutorial/routes/users.js
// create : express-locallibrary-tutorial/views/
// create : express-locallibrary-tutorial/views/error.pug
// create : express-locallibrary-tutorial/views/index.pug
// create : express-locallibrary-tutorial/views/layout.pug
// create : express-locallibrary-tutorial/app.js
// create : express-locallibrary-tutorial/package.json
// create : express-locallibrary-tutorial/bin/
// create : express-locallibrary-tutorial/bin/www

// change directory:
//   $ cd express-locallibrary-tutorial

// install dependencies:
//   $ npm install

// run the app:
//   $ DEBUG=express-locallibrary-tutorial:* npm start
