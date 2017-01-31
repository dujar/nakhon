var express = require('express');
var reload = require('reload');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var activities = require('./data/thingstodo.json');
var io = require('socket.io')();
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('appData', activities);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Nakhon Meetup!';

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./routes/index'));

var server = app.listen(app.get('port'), function() {
  console.log('listen on port' + app.get('port'));

});

reload(server, app);
