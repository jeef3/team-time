'use strict';

var express = require('express');

var app = express();

app.use(require('connect-livereload')({ port: 35729 }));

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('public/index.html');
});

app.listen(9000, function () {
  console.log('Listening on %d', 9000);
});
