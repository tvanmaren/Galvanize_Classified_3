(function () {
  'use strict';

  angular
    .module('app')
    .component('adEditor', {
      controller: adEditorController,
      controllerAs: '$ctrl',
      templateUrl: '/ads/ad-editor.template.html',
    });

  adEditorController.$inject = ['$state', '$stateParams', 'adService'];

  function adEditorController($state, $stateParams, adService) {
    const vm = this;

    vm.$onInit = onInit;
    vm.updateAd = updateAd;

    function onInit() {
      const adId = parseInt($stateParams.id);
      if (adService.adList) {
        vm.currentAd = adService.adList.filter((ad) => {
          return (ad.id === adId);
        })[0];
      } else {
        adService.getAd(adId).then((ad) => {
          vm.currentAd = ad;
        });
      }
    }

    function updateAd() {
      return adService
        .updateAd($stateParams.id, vm.currentAd)
        .then(() => {
          $state.go('ads');
        });
    }
  }
}());
