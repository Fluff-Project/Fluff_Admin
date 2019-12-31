var express = require('express');
var router = express.Router();

// static
router.get('/user', (req, res, next) => {
  res.render('user.ejs');
});

router.use('/api', require('./api'));

// server

module.exports = router;
