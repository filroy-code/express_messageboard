var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('new', { });
});

router.post('/new', function(req, res, next) {
  console.log(req.body)
  messages.push({user: req.body.user, text: req.body.text, added: new Date()})
  res.redirect('/');
});

module.exports = router;
