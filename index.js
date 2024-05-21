// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// WhoAmI endpoint
/* ==========================
Purpose: Will return a JSON object with the following keys
- ipaddress: The IP address of your system
- language: The preferred language of your system
- software: The software used to connect to make the request
========================== */
app.get('/api/whoami', (req, res) => {
  retJSON = {};
  retJSON.ipaddress = req.ip;
  retJSON.language = req.get('accept-language');
  retJSON.software = req.get('user-agent');

  console.log(req.headers);

  res.json(retJSON);
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
