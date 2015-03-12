'use strict';

var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 9000));
app.use(require('connect-livereload')({ port: 35729 }));

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('public/index.html');
});

app.listen(app.get('port'), function () {
  console.log('Listening on %d', app.get('port'));
});
