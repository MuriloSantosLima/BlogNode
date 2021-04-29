const express = require('express');
const app = express();
const router = express.Router();

const adminRoute = require('./routes/admin');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('',adminRoute);


module.exports = app;