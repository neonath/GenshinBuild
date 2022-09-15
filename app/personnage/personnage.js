'use strict';

angular.module('myApp.personnage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/personnage', {
    templateUrl: 'personnage/personnage.html',
    controller: 'personnageCtrl'
  });
}])

.controller('personnageCtrl', [function() {

}]);