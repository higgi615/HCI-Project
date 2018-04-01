(function () {
  'use strict';

  angular
    .module('studySpaces.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('studySpaces', {
        abstract: true,
        url: '/studySpaces',
        template: '<ui-view/>'
      })
      .state('studySpaces.list', {
        url: '',
        templateUrl: '/modules/studySpaces/client/views/list-studySpaces.client.view.html',
        controller: 'StudySpacesListController',
        controllerAs: 'vm'
      })
      .state('studySpaces.view', {
        url: '/:studySpaceId',
        templateUrl: '/modules/studySpaces/client/views/view-studySpace.client.view.html',
        controller: 'StudySpacesController',
        controllerAs: 'vm',
        resolve: {
          studySpaceResolve: getStudySpace
        },
        data: {
          pageTitle: '{{ studySpaceResolve.title }}'
        }
      });
  }

  getStudySpace.$inject = ['$stateParams', 'StudySpacesService'];

  function getStudySpace($stateParams, StudySpacesService) {
    return StudySpacesService.get({
      studySpaceId: $stateParams.studySpaceId
    }).$promise;
  }
}());
