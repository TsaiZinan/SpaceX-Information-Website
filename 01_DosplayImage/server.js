const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {result: null, error: null});
})

app.post('/', function (req, res) {
  let number = req.body.number;
  //let url = `data/all.json`
  let url = `https://api.spacexdata.com/v3/launches`

  request(url, function (err, response, body) {
    let json = JSON.parse(body)
    let img = `${json[number].links.mission_patch}`;
    let OutputText = `The ${number} flight of SpaceX is ${json[number].mission_name} in ${json[number].launch_date_utc}!`;
        res.render('index', {result: OutputText, error: null, image: img});
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