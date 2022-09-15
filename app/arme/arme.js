'use strict';

angular.module('myApp.arme', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/arme', {
    templateUrl: 'arme/arme.html',
    controller: 'armeCtrl'
  });
}])

.controller('armeCtrl', [function() {

}]);