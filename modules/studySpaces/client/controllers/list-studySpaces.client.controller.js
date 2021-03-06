(function () {
  'use strict';

  angular
    .module('studySpaces')
    .controller('StudySpacesListController', StudySpacesListController);

  StudySpacesListController.$inject = ['$scope', '$window', 'StudySpacesService'];

  function StudySpacesListController($scope, $window, StudySpacesService) {
    var vm = this;

    vm.studySpaces = StudySpacesService.query();

    $scope.category = 'Marston';
    $scope.current = '3rd Floor';

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

    // Save StudySpace
    $scope.save = function (name, newLevel, field) {
      // Create a new studySpace, or update the current instance
      console.log(name);
      for (var i in vm.studySpaces) {
        if (vm.studySpaces[i].name === name) {
          if (field === 1) {
            vm.studySpaces[i].crowdLevel = newLevel;
          }
          else if (field === 2) {
            vm.studySpaces[i].noiseLevel = newLevel;
          }
          else if (field === 3) {
            vm.studySpaces[i].atmosphere = newLevel;
          }
          vm.studySpaces[i].createOrUpdate()
            .then(successCallback)
            .catch(errorCallback);
        }
      }

      function successCallback(res) {
      }

      function errorCallback(res) {
      }
    }

    $scope.confirmAccurate = function () {
      $window.alert('Thank you for your input!');
    };

    $scope.setCurr = function(name) {
      console.log(name);
      $scope.current = name;
    }
  }
}());
