(function () {
  'use strict';

  angular
    .module('studySpaces.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.studySpaces', {
        abstract: true,
        url: '/studySpaces',
        template: '<ui-view/>'
      })
      .state('admin.studySpaces.list', {
        url: '',
        templateUrl: '/modules/studySpaces/client/views/admin/list-studySpaces.client.view.html',
        controller: 'StudySpacesAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.studySpaces.create', {
        url: '/create',
        templateUrl: '/modules/studySpaces/client/views/admin/form-studySpace.client.view.html',
        controller: 'StudySpacesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          studySpaceResolve: newStudySpace
        }
      })
      .state('admin.studySpaces.edit', {
        url: '/:studySpaceId/edit',
        templateUrl: '/modules/studySpaces/client/views/admin/form-studySpace.client.view.html',
        controller: 'StudySpacesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin'],
          pageTitle: '{{ studySpaceResolve.title }}'
        },
        resolve: {
          studySpaceResolve: getStudySpace
        }
      });
  }

  getStudySpace.$inject = ['$stateParams', 'StudySpacesService'];

  function getStudySpace($stateParams, StudySpacesService) {
    return StudySpacesService.get({
      studySpaceId: $stateParams.studySpaceId
    }).$promise;
  }

  newStudySpace.$inject = ['StudySpacesService'];

  function newStudySpace(StudySpacesService) {
    return new StudySpacesService();
  }
}());
