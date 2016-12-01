var express = require('express');
var router = express.Router();

// 访问首页
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '欢迎段金粒'
    });
});

module.exports = router;