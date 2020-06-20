var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入雷忆的数据库
require('./dbtools/connect.js')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var comm=require('./routes/comm.js')
var shoppingRouter = require('./routes/Shopping');
var kappaRouter = require('./routes/kappa')
var xeptsRouter = require('./routes/xepts');
var converseRouter=require('./routes/converse')
var comRouter = require('./routes/com.js')
var minisoRouter = require('./routes/miniso');
var shagpingQQ = require('./routes/shangpingXQ')
var AdidasRouter = require('./routes/Adidas.js')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 这是我们的二级路由引入
app.use('/shopping', shoppingRouter);
app.use('/xetp',xeptsRouter)
app.use('/comm',comm)
app.use('/kappa',kappaRouter)
app.use('/converseOne',converseRouter);
app.use('/puma',comRouter)
app.use('/miniso',minisoRouter)
app.use('/shangpinqq',shagpingQQ)
app.use('/adidas',AdidasRouter)

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


// 解决跨域问题
app.all('*', function(req, res, next) {
  console.log(req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
  next();  
});

module.exports = app;
