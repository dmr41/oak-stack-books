var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/booklist', function(req, res, next) {
  res.send('booklist');
});

module.exports = router;
