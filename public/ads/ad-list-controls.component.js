(function () {
  'use strict';

  angular
    .module("app")
    .component("adListControls", {
      controller: adListControlsController,
      controllerAs: '$ctrl',
      templateUrl: '/ads/ad-list-controls.template.html',
      bindings: {
        keyword: '=',
      }
    });

  function adListControlsController() {
    const vm = this;

  }

}());
