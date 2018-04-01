'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  StudySpace = mongoose.model('StudySpace'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create an StudySpace
 */
exports.create = function (req, res) {
  var studySpace = new StudySpace(req.body);

  studySpace.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(studySpace);
    }
  });
};

/**
 * Show the current studySpace
 */
exports.read = function (req, res) {
  // convert mongoose document to JSON
  var studySpace = req.studySpace ? req.studySpace.toJSON() : {};

  var lastUpdated = studySpace.updated_at;
  var timeSinceUpdateInMs = Date.now() - lastUpdated.getTime();
  var timeSinceUpdateInMin = timeSinceUpdateInMs / (1000 * 60);

  console.log(timeSinceUpdateInMin);

  if (timeSinceUpdateInMin >= 120) {
    studySpace.crowdLevel = 1;
    studySpace.noiseLevel = 1;
    studySpace.atmosphere = 1;
  }

  res.json(studySpace);
};

/**
 * Update a studySpace
 */
exports.update = function (req, res) {
  var studySpace = req.studySpace;
  var currCrowdLevel = studySpace.crowdLevel;
  var currNoiseLevel = studySpace.noiseLevel;
  var currAtmosphere = studySpace.atmosphere;

  var lastUpdated = studySpace.updated_at;
  var timeSinceUpdateInMs = Date.now() - lastUpdated.getTime();
  var timeSinceUpdateInMin = timeSinceUpdateInMs / (1000 * 60);

  console.log(timeSinceUpdateInMin);

  if (timeSinceUpdateInMin >= 120) {
    studySpace.crowdLevel = req.body.crowdLevel;
    studySpace.noiseLevel = req.body.noiseLevel;
    studySpace.atmosphere = req.body.atmosphere;
  } else if (timeSinceUpdateInMin >= 105) {
    studySpace.crowdLevel = req.body.crowdLevel * 0.85 + currCrowdLevel * 0.15;
    studySpace.noiseLevel = req.body.noiseLevel * 0.85 + currNoiseLevel * 0.15;
    studySpace.atmosphere = req.body.atmosphere * 0.85 + currAtmosphere * 0.15;
  } else if (timeSinceUpdateInMin >= 90) {
    studySpace.crowdLevel = req.body.crowdLevel * 0.8 + currCrowdLevel * 0.2;
    studySpace.noiseLevel = req.body.noiseLevel * 0.8 + currNoiseLevel * 0.2;
    studySpace.atmosphere = req.body.atmosphere * 0.8 + currAtmosphere * 0.2;
  } else if (timeSinceUpdateInMin >= 75) {
    studySpace.crowdLevel = req.body.crowdLevel * 0.75 + currCrowdLevel * 0.25;
    studySpace.noiseLevel = req.body.noiseLevel * 0.75 + currNoiseLevel * 0.25;
    studySpace.atmosphere = req.body.atmosphere * 0.75 + currAtmosphere * 0.25;
  } else if (timeSinceUpdateInMin >= 60) {
    studySpace.crowdLevel = req.body.crowdLevel * 0.7 + currCrowdLevel * 0.3;
    studySpace.noiseLevel = req.body.noiseLevel * 0.7 + currNoiseLevel * 0.3;
    studySpace.atmosphere = req.body.atmosphere * 0.7 + currAtmosphere * 0.3;
  } else if (timeSinceUpdateInMin >= 45) {
    studySpace.crowdLevel = req.body.crowdLevel * 0.65 + currCrowdLevel * 0.35;
    studySpace.noiseLevel = req.body.noiseLevel * 0.65 + currNoiseLevel * 0.35;
    studySpace.atmosphere = req.body.atmosphere * 0.65 + currAtmosphere * 0.35;
  } else if (timeSinceUpdateInMin >= 30) {
    studySpace.crowdLevel = req.body.crowdLevel * 0.6 + currCrowdLevel * 0.4;
    studySpace.noiseLevel = req.body.noiseLevel * 0.6 + currNoiseLevel * 0.4;
    studySpace.atmosphere = req.body.atmosphere * 0.6 + currAtmosphere * 0.4;
  } else if (timeSinceUpdateInMin >= 15) {
    studySpace.crowdLevel = req.body.crowdLevel * 0.55 + currCrowdLevel * 0.45;
    studySpace.noiseLevel = req.body.noiseLevel * 0.55 + currNoiseLevel * 0.45;
    studySpace.atmosphere = req.body.atmosphere * 0.55 + currAtmosphere * 0.45;
  } else {
    studySpace.crowdLevel = req.body.crowdLevel * 0.5 + currCrowdLevel * 0.5;
    studySpace.noiseLevel = req.body.noiseLevel * 0.5 + currNoiseLevel * 0.5;
    studySpace.atmosphere = req.body.atmosphere * 0.5 + currAtmosphere * 0.5;
  }

  studySpace.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(studySpace);
    }
  });
};

/**
 * Delete an studySpace
 */
exports.delete = function (req, res) {
  var studySpace = req.studySpace;

  studySpace.remove(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(studySpace);
    }
  });
};

/**
 * List of StudySpaces
 */
exports.list = function (req, res) {
  StudySpace.find().sort('-created').populate('user', 'displayName').exec(function (err, studySpaces) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      for (var i in studySpaces) {

        var lastUpdated = studySpaces[i].updated_at;
        var timeSinceUpdateInMs = Date.now() - lastUpdated.getTime();
        var timeSinceUpdateInMin = timeSinceUpdateInMs / (1000 * 60);

        console.log(timeSinceUpdateInMin);

        if (timeSinceUpdateInMin >= 120) {
          studySpaces[i].crowdLevel = 1;
          studySpaces[i].noiseLevel = 1;
          studySpaces[i].atmosphere = 1;
        }
      }
      res.json(studySpaces);
    }
  });
};

/**
 * StudySpace middleware
 */
exports.studySpaceByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'StudySpace is invalid'
    });
  }

  StudySpace.findById(id).populate('user', 'displayName').exec(function (err, studySpace) {
    if (err) {
      return next(err);
    } else if (!studySpace) {
      return res.status(404).send({
        message: 'No studySpace with that identifier has been found'
      });
    }
    req.studySpace = studySpace;
    next();
  });
};
