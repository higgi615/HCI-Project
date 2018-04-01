(function () {
  'use strict';

  angular
    .module('studySpaces')
    .controller('StudySpacesController', StudySpacesController);

  StudySpacesController.$inject = ['$scope', 'studySpaceResolve', 'Authentication'];

  function StudySpacesController($scope, studySpace, Authentication) {
    var vm = this;

    vm.studySpace = studySpace;
    vm.authentication = Authentication;

  }
}());
