'use strict';

var path = require('path');
var express = require('express');
var sassMiddleware = require('express-sass-middleware');

var app = express();

// Configuration
app.get('/style.css', sassMiddleware({
  file: './scss/app.scss', 
  watch: true, 
  precompile: true,                  
  outputStyle: 'compressed',
  includePaths: ['./scss'],
  indentedSyntax: true,
}))

app.use(express.static(path.join(__dirname, './public')));

app.set('views', path.join(__dirname, './'));
app.set('view engine', 'pug');


// Routes
var router = express.Router();

router.get('/', function(req, res){
	res.render('index');
})

app.use('/', router);

// Startup
app.listen(3000, () => {
    console.log(`* Server started`);
});