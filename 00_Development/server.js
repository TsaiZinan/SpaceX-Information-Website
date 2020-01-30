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
  res.render('pages/index', {result: null, error: null, mutipleResult: null});
})

// about page 
// app.get('/about', function(req, res) {
//   res.render('pages/about');
// });

app.post('/', function (req, res) {
  let single_number = req.body.number - 1;
  //console.log("== " + single_number);
  //single_number = single_number - 1;
  let first_number = req.body.first_number - 1;
  let last_number = req.body.last_number - 1;
  //let url = `data/all.json`
  let url = `https://api.spacexdata.com/v3/launches`

  request(url, function (err, response, body) {
    let json = JSON.parse(body)

    
    //var OutputText;
    //var img;
    

    //var sin = false;
    var input = false;

    var inputValue = req.body.vote;

    if (inputValue){
      input = true;
    }

    

    if (inputValue == "single"){
      first_number = single_number;
      last_number = single_number;
      //input = true;
    }

    

    function img_output (first, last){
      var totalimage = [];
      var img;
      for (i = first; i<= last; i++){
        img = `${json[i].links.mission_patch}`;
        totalimage.push(img);
        console.log("img " + i);
      }
      return totalimage;
    }

    function text_output (first, last){
      var totaltext = [];
      var text;
      for (i = first; i<= last; i++){
        text = `The ${i} flight of the SpaceX is ${json[i].mission_name} in ${json[i].launch_date_utc} in ${json[i].rocket.first_stage.cores[0].core_serial}!`;
        totaltext.push(text);
        console.log("text " + i);
      }
      return totaltext;
    }

    function core (first, last){
      var output = [];
      var single;
      for (i = first; i<= last; i++){
        single = json[i].rocket.first_stage.cores[0].core_serial;
        output.push(single);
      }
      return output;
    }

    function number (first, last){
      var output = [];
      var single;
      for (i = first; i<= last; i++){
        single = json[i].flight_number;
        output.push(single);
      }
      return output;
    }

    function time (first, last){
      var output = [];
      var single;
      for (i = first; i<= last; i++){
        single = json[i].launch_date_utc;
        output.push(single);
      }
      return output;
    }

    function name (first, last){
      var output = [];
      var single;
      for (i = first; i<= last; i++){
        single = json[i].mission_name;
        output.push(single);
      }
      return output;
    }

    function location (first, last){
      var output = [];
      var single;
      for (i = first; i<= last; i++){
        single = json[i].launch_site.site_name;
        output.push(single);
      }
      return output;
    }

    var flight_number = [];
    flight_number = number(first_number, last_number)

    var multipleText = [];
    multipleText = text_output(first_number, last_number);

    var image = [];
    image = img_output(first_number, last_number);
    
    var core_serial = [];
    core_serial = core(first_number, last_number);

    var launch_date_utc = [];
    launch_date_utc = time(first_number, last_number);

    var mission_name = [];
    mission_name = name(first_number, last_number);

    var site_name = [];
    site_name = location(first_number, last_number);

    res.render('pages/index', { error: null, input: input, mutipleResult: 
        multipleText, 
        image: image, 
        flight_number: flight_number, 
        core_serial: core_serial,
        launch_date_utc: launch_date_utc,
        mission_name: mission_name,
        site_name: site_name
    });
 
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



app.listen(80, function () {
  console.log('Example app listening on port 80!')
})