'use strict';

angular
  .module('home.module')
  .config(function config($stateProvider) {
    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: "js/home/home.html",
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
  });
