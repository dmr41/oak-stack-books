var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('lodash');
var index = require('./routes/index');
// var users = require('./routes/users');
var booklist = require('./routes/booklist.js');
var bookinput = require('./routes/bookinput.js');
var https = require('https');
var app = express();

var cookieSession = require('cookie-session')
var BookUpsertController = require('./controllers/bookUpsert.controller.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('trust proxy', 1);
app.use(cookieSession({
  name: 'session',
  keys: ['23ses332sd3saaac', 'tsasdSesas422a2qsa'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

async function savedSession(req) {
  let saved = await req.session.save();
  return saved;
}
app.use('/', index);
// app.use('/users', users);
app.use('/booklist', booklist)

app.all('*', (req, res, next) => {
  let allowedPaths = ['/','/main']
  let isAllowed = _.includes(allowedPaths, req.path)
  if(isAllowed || (req.session.verified === true)) {
    next();
  } else {
    res.render('error', {message: "Errored Out", error: {status: 'Bad Session', stack: '[]'}})
  }
})
app.post('/main', async (req, res, next) => {

  req.session.verified = false;
  let username = req.body.email;
  let password = req.body.password;
  let acceptedEmails = ['daniel.rivers@gmail.com', 'dmr41.rivers@gmail.com'];
  let isAcceptedUser = _.includes(acceptedEmails, username);
  if (process.env.NODE_ENV && isAcceptedUser) {
    let storedToken = process.env.accessTokeny;
    let isCorrectToken = (password === storedToken);
    if (isCorrectToken) {
      req.session.verified = true;
    }
  } else if(isAcceptedUser) {
    if(req.body.email.toLowerCase() === 'daniel.rivers@gmail.com') {
      req.session.firstName = 'Daniel';
      req.session.lastName = 'Rivers';
    } else if(req.body.email.toLowerCase() === 'dmr41.rivers@gmail.com') {
      req.session.firstName = 'David';
      req.session.lastName = 'Rivers';
    }
    req.session.verified = true;
  }
  return savedSession(req)
    .then((sessionResult) => {
      if(req.session.verified) {
        res.render('main')
      } else {
        res.render('index')
      }
    })
    .catch((errr) => {
      console.log("saveError", errr);
        res.render('/');
    })
});
app.get('/bookinput', (req, res, next) => {
    res.render('bookinput', { title: 'Title',
     sub: true,
     data: req.session });
});

app.get('/booklist', (req, res, next) => {
    res.render('booklist')
})
app.post('/bookcreate', (req, res, next) => {
  try {
    console.log("ok");
    let newCreate = new BookUpsertController(req.session, req.body);
    console.log(req.session);
    if(req.session.verified) {
      console.log("bookcreate",req.body);
    } else {
      console.log("still");
      res.render('index')
    }
  } catch(error) {
    console.log("aaa",error);
    res.status(500).render('bookinput', { message: error.message })
  }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
