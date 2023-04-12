var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cat', { title: 'Search Results Cat' });
});

module.exports = router;