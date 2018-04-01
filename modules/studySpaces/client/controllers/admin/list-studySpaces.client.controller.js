(function () {
  'use strict';

  angular
    .module('studySpaces.admin')
    .controller('StudySpacesAdminListController', StudySpacesAdminListController);

  StudySpacesAdminListController.$inject = ['StudySpacesService'];

  function StudySpacesAdminListController(StudySpacesService) {
    var vm = this;

    vm.studySpaces = StudySpacesService.query();
  }
}());
