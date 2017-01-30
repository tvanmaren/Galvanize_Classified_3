(function () {
  'use strict';

  angular.module("app").config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode = true;

    $stateProvider
      .state({
        name: 'ads',
        url: '/',
        component: 'adList',
      })
      .state({
        name: 'ad',
        url: 'classifieds/:id',
        component: 'adItem',
        params: {
          'id': '0'
        }
      })
      .state({
        name: 'ad.new',
        url: 'classifieds/new',
        component: 'adNew',
      })
      .state({
        name: 'ad.edit',
        url: 'classifieds/:id/edit',
        component: 'adEditor',
        params: {
          'id': '0'
        }
      });
  }
})();
