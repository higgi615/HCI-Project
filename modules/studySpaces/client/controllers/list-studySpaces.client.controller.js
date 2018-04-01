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
  }
}());
