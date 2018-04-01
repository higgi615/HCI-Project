(function () {
  'use strict';

  angular
    .module('studySpaces')
    .controller('StudySpacesListController', StudySpacesListController);

  StudySpacesListController.$inject = ['StudySpacesService'];

  function StudySpacesListController(StudySpacesService) {
    var vm = this;

    vm.studySpaces = StudySpacesService.query();

    for (var i in vm.studySpaces) {
      vm.studySpaces[i] = {};
      if (vm.studySpaces[i].crowdLevel < 1.5) {
        vm.studySpaces[i].crowdIcon = '/modules/studySpaces/client/img/crowd0';
      }
      else if (vm.studySpaces[i].crowdLevel < 2.5) {
        vm.studySpaces[i].crowdIcon = '/modules/studySpaces/client/img/crowd1';
      }
      else if (vm.studySpaces[i].crowdLevel < 3.5) {
        vm.studySpaces[i].crowdIcon = '/modules/studySpaces/client/img/crowd2';
      }
      else {
        vm.studySpaces[i].crowdIcon = '/modules/studySpaces/client/img/crowd3';
      }
    }
  }
}());
