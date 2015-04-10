
var express = require('express');
var app = express();
var http = require('http');
var rethinkCrtl = require('./api/controllers/rethinkCtrl');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.post('/api/newWord', rethinkCrtl.addNewWord);
app.get('/api/allWords', rethinkCrtl.getAllWords);
app.get('/api/oneWord/:wordId', rethinkCrtl.getOneWord);
app.get('/api/delete/:wordId', rethinkCrtl.deleteWord);


app.listen(8001);