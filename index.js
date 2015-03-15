'use strict';

require('dotenv').load();

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('port', (process.env.PORT || 9000));

if ('development' === app.get('env')) {
  app.use(require('connect-livereload')({ port: 35729 }));
}
console.log(process.env.PEOPLE);
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('app', { 
    people: process.env.PEOPLE,
    layout: false
  });
});

app.listen(app.get('port'), function () {
  console.log('Listening on %d', app.get('port'));
});
