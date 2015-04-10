var r = require('rethinkdb');
var words = r.db('dictionary').table('words');

var addNewWord = function(req, res) {

	onConnection(function(connection) {

		words.insert(req.body).run(connection, function(err, response) {

			if (err) {

				return res.status(500).json(err);

			} else {

				console.log('Response from adding a word: ', response);

				getAllWords(req, res);

			}

		})

	})

};

var getAllWords = function(req, res) {

	onConnection(function(connection) {

		words.run(connection, function(err, cursor) {

			if (err) {

				return res.status(500).json(err);

			} else {

				cursor.toArray(function(err, result) {

					console.log(result);

					return res.status(200).json(result);

				});

			}

		})

	})

};

var getOneWord = function(req, res) {

	onConnection(function(connection) {

		words.get(req.params.wordId).run(connection, function(err, response) {

			if (err) {

				console.log('Get one word error: ', err);

				return res.status(500).json(err);

			} else {

				console.log('Get one word response: ', response);

				return res.status(200).json(response);

			}

		})

	})

};

var deleteWord = function(req, res) {

	onConnection(function(connection) {

		words.get(req.params.wordId).delete().run(connection, function(err, response) {

			if (err) {

				return res.status(500).json(err);

			} else {

				return res.status(200).json(response);

			};

		})

	})

}

var onConnection = function(cb) {

	r.connect( {host: 'localhost', port: 28015, db: 'dictionary'}, function(err, conn) {

	    if (err) {

	    	console.log('Connection failed with error: ', err);

	    };

	    cb(conn);

	});

};

module.exports = {

	addNewWord: addNewWord,
	getAllWords: getAllWords,
	getOneWord: getOneWord,
	deleteWord: deleteWord,

};