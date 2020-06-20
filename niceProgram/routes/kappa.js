var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/gift',function(req, res){

  var {brand} = req.query

  // res.redirect(`http://localhost:3000/Puma/commodity.html`)  
  res.send({
    code:0,
    url:'http://localhost:3000/Puma/commodity.html'
  })

})

module.exports = router;