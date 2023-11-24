var express = require('express');
var app = express();
var routes = require('./src/Routes/Routes.js');

app.use(express.json());

app.use('/api', routes);

app.listen(3000);