var express = require('express');
var router = express.Router
var user = require("../controllers/userController");


/*module.exports = function(app) {
    app.post("/login", user.login);
}*/

router.post('/login', function(req, res, next){
    console(req,body)
    user.login(req.body.username, req.body.password).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
});