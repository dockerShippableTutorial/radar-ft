'use strict';

var request = require('request');
var BASE_URL = process.env.API_URL;

request(BASE_URL, function (err, res, body) {
  if (!err && res.statusCode === 200) {
    //API is accessible, test passed
    console.log(body);
    process.exit(0);
  } else {
    //API is not accessible, test failed
    console.log('Unable to access API');
    process.exit(1);
  }
});
