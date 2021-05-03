const express = require('express');
const route = express.Router();

route.get('/login',(req,res,next) => {
    res.render("login");
});
route.post('/login',(req,res,next) => {
    
    const valores = [];
    valores.push( req.body.login );
    valores.push( req.body.passw );
    res.send(valores);
});
route.get('',(req,res,next)=>{
    res.render('login');
});


module.exports = route;