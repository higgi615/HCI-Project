'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  path = require('path'),
  config = require(path.resolve('./config/config')),
  chalk = require('chalk');

/**
 * StudySpace Schema
 */
var StudySpaceSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'StudySpace must have a name'
  },
  category: {
    type: String,
    default: 'other'
  },
  crowdLevel: {
    type: Number,
    default: 1
  },
  noiseLevel: {
    type: Number,
    default: 1
  },
  atmosphere: {
    type: Number,
    default: 1
  },
  updated_at: Date
});

StudySpaceSchema.pre('save', function (next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  next();
});

var StudySpace = mongoose.model('StudySpace', StudySpaceSchema);

module.exports = StudySpace;
