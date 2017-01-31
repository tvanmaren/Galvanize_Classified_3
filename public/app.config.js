(function () {
  'use strict';

  angular.module("app").config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'ads',
        url: '/',
        component: 'adList',
      })
      .state({
        name: 'new',
        url: 'ads/new',
        component: 'adNew',
      })
      .state({
        name: 'edit',
        url: 'ads/:id/edit',
        component: 'adEditor',
        params: {
          'id': '0'
        }
      });
  }
})();
