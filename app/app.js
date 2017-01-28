var express = require('express');
var reload = require('reload');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(require('./routes/index'));


var server = app.listen(app.get('port'), function() {
  console.log('listen on port' + app.get('port'));
});

reload(server, app);
