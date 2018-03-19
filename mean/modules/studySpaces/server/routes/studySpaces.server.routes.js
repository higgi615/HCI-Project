'use strict';

/**
 * Module dependencies
 */
var studySpacesPolicy = require('../policies/studySpaces.server.policy'),
  studySpaces = require('../controllers/studySpaces.server.controller');

module.exports = function (app) {
  // StudySpaces collection routes
  app.route('/api/studySpaces').all(studySpacesPolicy.isAllowed)
    .get(studySpaces.list)
    .post(studySpaces.create);

  // Single studySpace routes
  app.route('/api/studySpaces/:studySpaceId').all(studySpacesPolicy.isAllowed)
    .get(studySpaces.read)
    .put(studySpaces.update)
    .delete(studySpaces.delete);

  // Finish by binding the StudySpace middleware
  app.param('studySpaceId', studySpaces.studySpaceByID);
};
