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
      const adId=parseInt($stateParams.id);
      if (adService.adList) {
        vm.currentAd = adService.adList.filter((ad) => {
          return (ad.id === adId);
        })[0];
        console.log('ad retrieved:',vm.currentAd);
      } else {
        adService.getAd(adId).then((ad) => {
          console.log('ad retrieved:',ad);
          vm.currentAd = ad;
        });
      }
    }

    function updateAd() {
      return adService
        .updateAd($stateParams.id, vm.currentAd)
        .then((updatedAd) => {
          adService.adList = adService.adList.map((currentAd) => {
            if (currentAd.id === updatedAd.id) {
              currentAd = updatedAd;
            }
          });
          $state.go('ads');
        });
    }
  }
}());
