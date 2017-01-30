(function () {
  'use strict';

  angular.module("app").config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'adList',
      })
      .state({
        name: 'ad',
        url: '/:id',
        component: 'adItem',
        params: {
          'id': '0'
        }
      })
      .state({
        name: 'ad.new',
        url: '/new',
        component: 'adNew',
      })
      .state({
        name: 'ad.edit',
        url: '/:id/edit',
        component: 'adEditor',
        params: {
          'id': '0'
        }
      });
  }
})();
