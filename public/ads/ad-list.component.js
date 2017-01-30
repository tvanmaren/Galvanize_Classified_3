(function () {
  'use strict';

  angular
    .module("app")
    .component("adList", {
      controller: adListController,
      controllerAs: '$ctrl',
      templateUrl: '/ads/ad-list.template.html',
      bindings: {
        adArray: '=',
      }
    });

  adListController.$inject = ['$state', 'adService'];

  function adListController($state, adService) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit() {
      console.log(vm);
      adService.getAds().then((res) => {
        vm.adArray = res.data;
        console.log(vm.adArray);
      });
    }

    function deleteItem(itemId) {
      return adService.deleteItem(itemId)
        .then((item) => {
          vm.adArray = vm.adArray.filter((ad) => {
            return ad.id !== item.id;
          });
        });
    }
  }

}());
