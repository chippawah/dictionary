var app = angular.module('dictionary');

app.controller('singleWordCtrl', function($scope, wordObj) {

	$scope.word = wordObj;

});