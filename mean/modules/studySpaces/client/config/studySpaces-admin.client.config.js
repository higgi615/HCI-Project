(function () {
  'use strict';

  // Configuring the StudySpaces Admin module
  angular
    .module('studySpaces.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage StudySpaces',
      state: 'admin.studySpaces.list'
    });
  }
}());
