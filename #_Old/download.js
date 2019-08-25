const http = require('https');
const fs = require('fs');

const file = fs.createWriteStream("file_test.json");
const request = http.get("https://api.spacexdata.com/v3/launches", function(response) {
  response.pipe(file);
});