'use strict';

angular
  .module('home.module')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope','$stateParams'];

function HomeCtrl($scope, $stateParams) {

  var vm = this;
  vm.countFuel = countFuel;
  vm.toSec = toSec;
  vm.cutInputVal = cutInputVal;

  function countFuel(min, sec, duration) {
    var lapSec = toSec(min) + sec;
    var durationSec = toSec(duration);

    vm.result = Math.ceil(durationSec / lapSec) + 1;
  }

  function toSec(min) {
    return min * 60;
  }

  function cutInputVal(val, limit, original) {
    if (val > limit) {
      vm[original] = limit;
    }
  }
}
