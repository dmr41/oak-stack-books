var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/bookinput', (req, res, next) => {
    console.log("sadfasf");
    console.log("body",req.body);
  // res.render('bookinput', { title: 'Express' });
});

module.exports = router;
