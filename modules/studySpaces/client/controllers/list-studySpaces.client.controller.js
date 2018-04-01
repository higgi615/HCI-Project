(function () {
  'use strict';

  angular
    .module('studySpaces')
    .controller('StudySpacesListController', StudySpacesListController);

  StudySpacesListController.$inject = ['StudySpacesService'];

  function StudySpacesListController(StudySpacesService) {
    var vm = this;

    vm.studySpaces = StudySpacesService.query();
  }
}());
