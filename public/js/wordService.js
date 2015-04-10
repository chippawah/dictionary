var app = angular.module('dictionary');

app.service('wordService', function($http, $q, $location) {

	this.addWord = function(wordObj) {

		var dfd = $q.defer();

		$http({

			method: 'POST',
			url: '/api/newWord',
			data: wordObj

		})

			.then(function(response) {

				dfd.resolve(response.data);

			}, function(error) {

				dfd.reject(error);

			});

		return dfd.promise;

	}

	this.getAllWords = function() {

		var dfd = $q.defer();

		$http({

			method: 'GET',
			url: '/api/allWords'

		})

			.then(function(response) {

				dfd.resolve(response.data);

			}, function(error) {

				dfd.reject(error);

			});

		return dfd.promise;
	};

	this.getOneWord = function(wordId) {

		var dfd = $q.defer();

		$http({

			method: 'GET',
			url: '/api/oneWord/' + wordId

		})

			.then(function(response) {

				dfd.resolve(response.data);

			}, function(error) {

				dfd.reject(error);

			});

		return dfd.promise;

	};

	this.deleteWord = function(wordId) {

		$http({

			method: 'GET',
			url: '/api/delete/' + wordId

		})

			.then(function(response) {

				console.log('Response from deleteWord: ', response.data);

			}, function(error) {

				console.log('Error from deleteWord: ', error);

			});

	}

})