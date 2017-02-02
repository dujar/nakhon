var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req,res) {
appData = req.app.get('appData');

    res.render('index', {
      pageTitle: 'Home',
      pageID: 'home',
      activity: appData
    });


});

router.post('/activity', function(req,res) {
    var data = req.body;
    appData = req.app.get('appData');

    console.log(typeof data);
    console.log(appData);
    filePath = __dirname + '/data/thingstodo.json';
    console.log(filePath);
    appData.activity.push(data);
    console.log(appData);

    fs.writeFile('message.txt', JSON.stringify(appData), 'utf8', (err) => {
  if (err) throw err;
  console.log('successfully copied');
  });

    res.render('activity', {
      pageTitle: 'activities',
      pageID: 'activity',
      activities: appData
    });

});

router.get('/new', function(req,res) {

  res.render('new', {
  pageTitle: 'Add another Activity',
  pageID: 'new'

  });
});

router.get('/home', function(req,res) {

  res.render('activity', {
  pageTitle: 'Homely based',
  pageID: 'new'

  });
});



module.exports = router;
