var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. *
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});*/
router.get('/', function (req, res, next) {
    //res.send('Hello Express!');
    res.sendFile(path.join(__dirname, "views/test", "index.html"));
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});
/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});
/* GET cotact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
