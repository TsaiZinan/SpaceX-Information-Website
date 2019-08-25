var request = require("request");

var options = { method: 'GET',
  url: 'https://api.spacexdata.com/v3/launches/60',
  headers: 
   { 'Postman-Token': 'cca31026-c02e-49a1-b5b3-9a97abe7a478',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body.flight_number);
});
