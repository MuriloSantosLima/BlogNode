const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const handlebars = require('express-handlebars');
const { use } = require('./routes/admin');
const adminRoute = require('./routes/admin');



app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.use(express.static(path.join(__dirname,'public') ) );
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('',adminRoute);


module.exports = app;