require('dotenv').load();

const fs = require('fs');

const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Person = require('./server/person');
const route = require('./server/route');

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI);
}

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('port', (process.env.PORT || 9000));

if (app.get('env') === 'development') {
  app.use(require('connect-livereload')({ port: 35729 }));
  app.use(morgan('combined'));
}

app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/people', route);

app.get('/', (req, res) => {
  if (process.env.MONGO_URI) {
    Person.find((err, people) => {
      if (err) { throw err; }

      res.render('app', {
        people: JSON.stringify(people),
        layout: false,
      });

      return people;
    });
  } else {
    fs.readFile('./people.json', { encoding: 'utf-8' }, (err, data) => {
      res.render('app', {
        people: data,
        layout: false,
      });
    });
  }
});

app.listen(app.get('port'), () => {
  console.log('Listening on %d', app.get('port'));
});
