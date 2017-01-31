(function () {
  'use strict';

  angular
    .module('app')
    .component('adNew', {
      controller: adNewController,
      controllerAs: '$ctrl',
      templateUrl: '/ads/ad-new.template.html',
    });

  adNewController.$inject = ['$state', '$stateParams', 'adService'];

  function adNewController($state, $stateParams, adService) {
    const vm = this;

    vm.makeAd = makeAd;

    function makeAd() {
      return adService
        .newAd(vm.newAd)
        .then((newAd) => {
          adService.adList.push(newAd);
          $state.go('ads');
        });
    }
  }

}());
