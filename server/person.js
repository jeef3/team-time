'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Person', new mongoose.Schema({
  name: { type: String, required: true },
  avatar: String,
  city: String,
  tz: String,
  availability: {
    monday: { start: Number, duration: Number },
    tuesday: { start: Number, duration: Number },
    wednesday: { start: Number, duration: Number },
    thursday: { start: Number, duration: Number },
    friday: { start: Number, duration: Number },
    saturday: { start: Number, duration: Number },
    sunday: { start: Number, duration: Number }
  }
}));
