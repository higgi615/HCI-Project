(function () {
  'use strict';

  angular
    .module('studySpaces')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'StudySpaces',
      state: 'studySpaces',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'studySpaces', {
      title: 'List StudySpaces',
      state: 'studySpaces.list',
      roles: ['*']
    });
  }
}());
