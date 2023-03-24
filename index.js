// index.js

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Set up the route to handle requests to /api/:date?
app.get('/api/:date?', (req, res) => {
  let inputDate = req.params.date;
  let unixTimestamp = null;
  let utcDate = null;

  // If input date is empty, use current date
  if (!inputDate) {
    unixTimestamp = Date.now();
    utcDate = new Date().toUTCString();
  }
  // Otherwise, parse input date
  else {
    // If input date is invalid, assume it is a Unix timestamp
    if (isNaN(Date.parse(inputDate))) {
      unixTimestamp = parseInt(inputDate);
      utcDate = new Date(unixTimestamp).toUTCString();
    }
    // Otherwise, assume it's a UTC date string
    else {
      unixTimestamp = Date.parse(inputDate);
      utcDate = new Date(inputDate).toUTCString();
    }

    // If input date is invalid, return error
    if (isNaN(unixTimestamp)) {
      res.json({ error: "Invalid Date" });
      return;
    }
  }

  // Return Unix timestamp and UTC date
  res.json({
    unix: unixTimestamp,
    utc: utcDate
  });
});

// API endpoint
app.get("/api/hello", function(req, res) {
  res.json({ greeting: 'hello API' });
});

// listen for requests
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
