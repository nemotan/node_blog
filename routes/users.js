var express = require('express');
var router = express.Router();



// 跳转到当前用户的页面
router.get('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

// 用户注册
router.post('/reg', function(req, res, next) {
    res.send('用户注册成功!');
});

// 用户发表blog 
router.post('/post', function(req, res, next) {

});

// 跳转到用户登录页面
router.get('/login', function(req, res, next) {

});

// 用户登录
router.post('/doLogin', function(req, res, next) {

});

// 用户登出
router.get('/loginout', function(req, res, next) {

});


module.exports = router;