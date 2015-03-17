'use strict';

var express = require('express');

var Person = require('./person');

var router = express.Router();

router.get('/', function (req, res, next) {
  Person.find(function (err, people) {
    if (err) { return next(err); }
    res.json(people);
  });
});

router.post('/', function (req, res, next) {
  Person.create(req.body, function (err, person) {
    if (err) { return next(err); }
    res.redirect('/people/' + person.id);
  });
});

router.get('/:id', function (req, res, next) {
  Person.findById(req.params.id, function (err, person) {
    if (err) { return next(err); }
    res.json(person);
  });
});

router.put('/:id', function (req, res, next) {
  Person.findByIdAndUpdate(req.params.id, req.body, function (err, person) {
    if (err) { return next(err); }
    res.redirect('/people/' + person.id);
  });
});

router.delete('/:id', function (req, res, next) {
  console.log('Deleting', req.params.id);
  Person.findByIdAndRemove(req.params.id, function (err, person) {
    if (err) { return next(err); }
    res.redirect('/people');
  });
});

module.exports = router;
