(function () {
  'use strict';

  angular
    .module('studySpaces.admin')
    .controller('StudySpacesAdminController', StudySpacesAdminController);

  StudySpacesAdminController.$inject = ['$scope', '$state', '$window', 'studySpaceResolve', 'Authentication', 'Notification'];

  function StudySpacesAdminController($scope, $state, $window, studySpace, Authentication, Notification) {
    var vm = this;

    vm.studySpace = studySpace;
    vm.authentication = Authentication;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing StudySpace
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.studySpace.$remove(function () {
          $state.go('admin.studySpaces.list');
          Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> StudySpace deleted successfully!' });
        });
      }
    }

    // Save StudySpace
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.studySpaceForm');
        return false;
      }

      // Create a new studySpace, or update the current instance
      vm.studySpace.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.studySpaces.list'); // should we send the User to the list or the updated StudySpace's view?
        Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> StudySpace saved successfully!' });
      }

      function errorCallback(res) {
        Notification.error({ message: res.data.message, title: '<i class="glyphicon glyphicon-remove"></i> StudySpace save error!' });
      }
    }
  }
}());
