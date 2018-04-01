(function () {
  'use strict';

  angular
    .module('studySpaces.services')
    .factory('StudySpacesService', StudySpacesService);

  StudySpacesService.$inject = ['$resource', '$log'];

  function StudySpacesService($resource, $log) {
    var StudySpace = $resource('/api/studySpaces/:studySpaceId', {
      studySpaceId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(StudySpace.prototype, {
      createOrUpdate: function () {
        var studySpace = this;
        return createOrUpdate(studySpace);
      }
    });

    return StudySpace;

    function createOrUpdate(studySpace) {
      if (studySpace._id) {
        return studySpace.$update(onSuccess, onError);
      } else {
        return studySpace.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(studySpace) {
        // Any required internal processing from inside the service, goes here.
      }

      // Handle error response
      function onError(errorResponse) {
        var error = errorResponse.data;
        // Handle error internally
        handleError(error);
      }
    }

    function handleError(error) {
      // Log error
      $log.error(error);
    }
  }
}());
