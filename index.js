'use strict';

require('dotenv').load();

var fs = require('fs');

var express = require('express');
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var Person = require('./server/person');
var route = require('./server/route');

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI);
}

var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('port', (process.env.PORT || 9000));

if ('development' === app.get('env')) {
  app.use(require('connect-livereload')({ port: 35729 }));
  app.use(morgan('combined'));
}

app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/people', route);

app.get('/', function (req, res) {
  if (process.env.MONGO_URI) {
    Person.find(function (err, people) {
      if (err) { throw err; }

      res.render('app', { 
        people: JSON.stringify(people),
        layout: false
      });
    });
  } else {
    fs.readFile('./people.json', { encoding: 'utf-8' }, function (err, data) {
      res.render('app', {
        people: data,
        layout: false
      });
    });
  }
});

app.listen(app.get('port'), function () {
  console.log('Listening on %d', app.get('port'));
});
