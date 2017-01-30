(function () {
  'use strict';

  angular
    .module("app")
    .service('adService', service);

  service.$inject = ['$http'];

  function service($http) {
    const service = this;

    service.getAds = getAds;
    service.getAd = getAd;
    service.newAd = newAd;
    service.updateAd = updateAd;
    service.deleteAd = deleteAd;

    function getAds() {
      return $http.get('/classifieds')
        .then((ads) => {
          service.adList = ads.data;
          return service.adList;
        });
    }

    function getAd(adId) {
      return $http.get(`/classifieds/${adId}`)
        .then((ad) => {
          service.currentAd = ad.data;
          return service.currentAd;
        });
    }

    function newAd(data) {
      return $http.post('/classifieds', data)
        .then((ad) => {
          service.currentAd = ad.data;
          return service.currentAd;
        });
    }

    function updateAd(adId, data) {
      return $http.patch(`/classifieds/${adId}`, data)
        .then((ad) => {
          service.currentAd = ad.data;
          return service.currentAd;
        });
    }

    function deleteAd(adId) {
      return $http.delete(`/classifieds/${adId}`)
        .then((ad) => {
          service.currentAd = ad.data;
          return service.currentAd;
        });
    }
  }
}());
