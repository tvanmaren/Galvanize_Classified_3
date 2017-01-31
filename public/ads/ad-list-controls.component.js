(function () {
  'use strict';

  angular
    .module("app")
    .component('adListControls', {
      controller: adListControlsController,
      controllerAs: '$ctrl',
      templateUrl: '/ads/ad-list-controls.template.html',
      bindings: {
        keyword: '=',
        sortBy: '=',
      }
    });

  function adListControlsController() {
    const vm = this;

    vm.$onInit = onInit;

    function onInit() {
      vm.sortBy = "date";
      vm.keyword = "";
      vm.sortOptions = ['date', 'price'];
    }

  }

}());
