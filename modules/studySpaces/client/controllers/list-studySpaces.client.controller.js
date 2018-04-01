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

      // Crowd Level
      if (vm.studySpaces[i].crowdLevel < 1.5) {
        vm.studySpaces[i].crowdIcon = '/modules/studySpaces/client/img/crowd0.png';
      }
      else if (vm.studySpaces[i].crowdLevel < 2.5) {
        vm.studySpaces[i].crowdIcon = '/modules/studySpaces/client/img/crowd1.png';
      }
      else if (vm.studySpaces[i].crowdLevel < 3.5) {
        vm.studySpaces[i].crowdIcon = '/modules/studySpaces/client/img/crowd2.png';
      }
      else {
        vm.studySpaces[i].crowdIcon = '/modules/studySpaces/client/img/crowd3.png';
      }

      // Noise Level
      if (vm.studySpaces[i].noiseLevel < 1.5) {
        vm.studySpaces[i].noiseIcon = '/modules/studySpaces/client/img/sound0.png';
      }
      else if (vm.studySpaces[i].noiseLevel < 2.5) {
        vm.studySpaces[i].noiseIcon = '/modules/studySpaces/client/img/sound1.png';
      }
      else if (vm.studySpaces[i].noiseLevel < 3.5) {
        vm.studySpaces[i].noiseIcon = '/modules/studySpaces/client/img/sound2.png';
      }
      else {
        vm.studySpaces[i].noiseIcon = '/modules/studySpaces/client/img/sound3.png';
      }

      // Atmos Level
      if (vm.studySpaces[i].atmosphere < 1.5) {
        vm.studySpaces[i].atmosphereIcon = '/modules/studySpaces/client/img/atmo0.png';
      }
      else if (vm.studySpaces[i].atmosphere < 2.5) {
        vm.studySpaces[i].atmosphereIcon = '/modules/studySpaces/client/img/atmo1.png';
      }
      else if (vm.studySpaces[i].atmosphere < 3.5) {
        vm.studySpaces[i].atmosphereIcon = '/modules/studySpaces/client/img/atmo2.png';
      }
      else {
        vm.studySpaces[i].atmosphereIcon = '/modules/studySpaces/client/img/atmo3.png';
      }
    }
  }
}());
