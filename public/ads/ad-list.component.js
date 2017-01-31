(function () {
  'use strict';

  angular
    .module('app')
    .component('adList', {
      controller: adListController,
      controllerAs: '$ctrl',
      templateUrl: '/ads/ad-list.template.html'
    });

  adListController.$inject = ['$state', 'adService'];

  function adListController($state, adService) {
    const vm = this;

    vm.$onInit = onInit;
    vm.deleteItem = deleteItem;

    function onInit() {
      if (adService.adList) {
        vm.adArray = adService.adList;
        console.log('local ads:',vm.adArray);
      } else {
        adService.getAds()
          .then((ads) => {
            vm.adArray = ads;
            console.log('ads retrieved:',vm.adArray);
          });
      }
    }

    function deleteItem(itemId) {
      return adService.deleteAd(itemId)
        .then((item) => {
          vm.adArray = vm.adArray.filter((ad) => {
            return ad.id !== item.id;
          });
        });
    }
  }

}());
