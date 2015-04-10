var app = angular.module('dictionary', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider

		.when('/home', {

			templateUrl:'../templates/home.html',
			controller: 'mainCtrl',
			resolve: {

				wordsArray: function(wordService) {

					return wordService.getAllWords();

				}

			}

		})

		.when('/word/:wordId', {

			templateUrl: '../templates/singleWord.html',
			controller: 'singleWordCtrl',
			resolve: {

				wordObj: function($route, wordService) {

					return wordService.getOneWord($route.current.params.wordId);

				}

			}

		})

		.otherwise({

			redirectTo:'/home'

		})

})
