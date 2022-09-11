'use strict';

angular.module('myApp.importData', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/importData', {
    templateUrl: 'importData/importData.html',
    controller: 'importDataCtrl'
  });
}])

.controller('importDataCtrl', [function() {

}]);