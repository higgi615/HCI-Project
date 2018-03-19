(function (app) {
  'use strict';

  app.registerModule('studySpaces', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('studySpaces.admin', ['core.admin']);
  app.registerModule('studySpaces.admin.routes', ['core.admin.routes']);
  app.registerModule('studySpaces.services');
  app.registerModule('studySpaces.routes', ['ui.router', 'core.routes', 'studySpaces.services']);
}(ApplicationConfiguration));
