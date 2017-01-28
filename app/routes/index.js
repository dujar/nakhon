
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  res.send(`
    <h1> Coffee shop in Nakhon Nayok</h1>
    <p> but it does matter what you think</p>
    <p> but it does matter what you think</p>
    <p> but it does matter what you think</p>
    <p> but it does matter what you think</p>
    <script src="/reload/reload.js"></script>
    `);
});

module.exports = router;
