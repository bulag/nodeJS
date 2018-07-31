

var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var elektronikRoute

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/app_server/views'))
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//var routeElektronik = require('./app_server/route/ElektronikRouter');


app.use(ejsLayouts);

app.use('/public',express.static(path.join(__dirname, 'public')));

//yonlendiriciler ekleniyor
require('./app_server/route/routeManager')(app);

app.listen(8000);