const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs')

// index page
app.get('/', function (req, res) {
  res.render('index', {result: null, error: null, mutipleResult: null});
})

// about page 
// app.get('/about', function(req, res) {
//   res.render('pages/about');
// });

app.post('/', function (req, res) {
  let number = req.body.number;
  let first_number = req.body.first_number;
  let last_number = req.body.last_number;
  //let url = `data/all.json`
  let url = `https://api.spacexdata.com/v3/launches`

  request(url, function (err, response, body) {
    let json = JSON.parse(body)

    var multipleText = [];
    var OutputText;
    var img;
    var multiimage = [];

    var inputValue = req.body.vote;

    if (inputValue == "single"){
      img = `${json[number].links.mission_patch}`;
      OutputText = `The ${number} flight of SpaceX is ${json[number].mission_name} in ${json[number].launch_date_utc}!`;
    }

    if (inputValue == "multiple"){
      var multext;
      for (i = first_number; i<= last_number; i++){
        multext = `The ${i} flight of SpaceX is ${json[i].mission_name} in ${json[i].launch_date_utc}!`;
        multipleText.push(multext);
      }
      var mulimg;
      for (i = first_number; i<= last_number; i++){
        mulimg = `${json[i].links.mission_patch}`;
        multiimage.push(mulimg);
      }
    }

    
    res.render('index', {result: OutputText, error: null, image: img, mutipleResult: multipleText, multiimage: multiimage});
 
  });

  // request(url, function (err, response, body) {
  //   if(err){
  //     res.render('index', {weather: null, error: 'Error, please try again'});
  //   } else {
  //     let weather = JSON.parse(body)
  //     if(weather.main == undefined){
  //       res.render('index', {weather: null, error: 'Error, please try again'});
  //     } else {
  //       let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
  //       res.render('index', {weather: weatherText, error: null});
  //     }
  //   }
  // });
})



app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
})