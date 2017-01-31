(function () {
  'use strict';

  angular
    .module("app")
    .component('adItem', {
      controller: adItemController,
      controllerAs: '$ctrl',
      templateUrl: '/ads/ad-item.template.html',
      bindings: {
        item: '<',
        deleteItem: '&',
      }
    });

  adItemController.$inject = ['$state'];

  function adItemController($state) {
    const vm = this;

    vm.editItem = editItem;

    function editItem() {
      $state.go('edit', {
        'id': vm.item.id,
      });
    }
  }

}());
