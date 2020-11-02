var express = require('express');
var router = express.Router();
var Product = require("../models/product");

var csrf = require("csurf");
var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function (err, docs) {
    var productChuck = [];
    var chunksize = 3;
    for (var i = 0; i < docs.length; i+=chunksize) {
      productChuck.push(docs.slice(i, i+chunksize));
    }
    res.render('shop/index', { title: 'Online shop', products: productChuck });
  })
});

router.get('/user/signup', function(req, res, next) {               //load trang signup
    res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup', function(req, res, next) {              //post Đăng nhập
  res.redirect("/");
});

module.exports = router;
