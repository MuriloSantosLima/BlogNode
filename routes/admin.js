const express = require('express');
//const app = express();
const route = express.Router();

route.get('/',(req,res,next) => {

    res.status(200).send({resultado: "estou aqui"});

});

module.exports = route;