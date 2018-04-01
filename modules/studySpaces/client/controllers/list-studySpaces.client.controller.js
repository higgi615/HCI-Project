(function () {
  'use strict';

  angular
    .module('studySpaces')
    .controller('StudySpacesListController', StudySpacesListController);

  StudySpacesListController.$inject = ['$scope', 'StudySpacesService'];

  function StudySpacesListController($scope, StudySpacesService) {
    var vm = this;

    vm.studySpaces = StudySpacesService.query();

    $scope.getCrowdIcon = function (crowdLevel) {
      if (crowdLevel < 1.5) {
        return '/modules/studySpaces/client/img/crowd0.png';
      }
      else if (crowdLevel < 2.5) {
        return '/modules/studySpaces/client/img/crowd1.png';
      }
      else if (crowdLevel < 3.5) {
        return '/modules/studySpaces/client/img/crowd2.png';
      }
      else {
        return '/modules/studySpaces/client/img/crowd3.png';
      }
    };

    $scope.getNoiseIcon = function (noiseLevel) {
      if (noiseLevel < 1.5) {
        return '/modules/studySpaces/client/img/sound0.png';
      }
      else if (noiseLevel < 2.5) {
        return '/modules/studySpaces/client/img/sound1.png';
      }
      else if (noiseLevel < 3.5) {
        return '/modules/studySpaces/client/img/sound2.png';
      }
      else {
        return '/modules/studySpaces/client/img/sound3.png';
      }
    };

    $scope.getAtmoIcon = function (atmosphereLevel) {
      if (atmosphereLevel < 1.5) {
        return '/modules/studySpaces/client/img/atmo0.png';
      }
      else if (atmosphereLevel < 2.5) {
        return '/modules/studySpaces/client/img/atmo1.png';
      }
      else if (atmosphereLevel < 3.5) {
        return '/modules/studySpaces/client/img/atmo2.png';
      }
      else {
        return '/modules/studySpaces/client/img/atmo3.png';
      }
    };
  }
}());
