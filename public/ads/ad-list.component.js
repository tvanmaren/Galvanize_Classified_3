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
    vm.textFilter = textFilter;

    function onInit() {
      vm.sortBy="date";
      if (adService.adList) {
        vm.adArray = adService.adList;
      } else {
        adService.getAds()
          .then((ads) => {
            vm.adArray = ads;
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

    function textFilter(item) {
      if (!vm.keyword) {
        return true;
      } else if (item.title.includes(vm.keyword) || item.description.includes(vm.keyword)) {
        return true;
      } else {
        return false;
      }
    }
  }

}());
