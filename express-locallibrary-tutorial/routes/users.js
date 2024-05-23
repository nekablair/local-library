const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// added new route/endpoint, must add a slash before, since there isn't one at the end of localhost:3000/users
router.get('/cool/', function(req, res, next){
  res.send("You're so cool")
});

module.exports = router;
