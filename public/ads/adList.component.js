(function () {
  'use strict';

  angular
    .module("app")
    .component("adList", {
      controller: adListController,
      controllerAs: '$ctrl',
      templateUrl: '/ads/adList.template.html',
    });

  adListController.$inject = ['$state', 'adService'];

  function adListController($state) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit() {
      adService.getAds().then((ads) => {
        vm.adArray = ads;
      });
    }

  }

}());
