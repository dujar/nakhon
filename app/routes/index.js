var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  var appData = req.app.get('appData');
  appData.activity.forEach(function(activity) {
    res.render('index', {
      pageTitle: 'Home',
      pageID: 'home',
      activity: activity 
    });
  })

});

router.post('/addactivity', function(req,res) {
    var data = req.body;
    var appData = req.app.get('appData');

    console.log(data);
    console.log(appData);
    filePath = __dirname + '/data/thingstodo.json';
    appData.activity += data;
    console.log(appData.activity);

    req.on('end', function (){
        fs.appendFile(filePath, appData, function() {
    res.end();
        });
  res.redirect('/activity');
});

});

router.get('/activity', function(req,res) {
  
  res.render('activity', {
  pageTitle: 'Add another Activity',
  pageID: 'activity'

  });
});

module.exports = router;
