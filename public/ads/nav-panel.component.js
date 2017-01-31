(function () {
  'use strict';

  angular
    .module("app")
    .component('navPanel', {
      // controller: navPanelController,
      // controllerAs: '$ctrl',
      templateUrl: '/ads/nav-panel.template.html',
    });

  // adItemController.$inject = ['$state'];
  //
  // function navPanelController($state) {
  //   const vm = this;
  //
  //   vm.$onInit = onInit;
  //
  //   function onInit() {
  //     $state.go('edit', {
  //       'id': vm.item.id,
  //     });
  //   }
  // }

}());
