var fs=require('fs')

fs.readFile('./file_test.json','utf8',function (err, data) {
    if(err) console.log(err);
    var test1=JSON.parse(data);

    function echo_information(min_number, max_number, title){

        for(var single in test1){

            var number = test1[single].flight_number;
    
            if(number >= min_number && number <= max_number){
                console.log(title + ": " + test1[single][`${title}`]);
                //console.log("flight_number" + ": " + test1[single]['flight_number']);
                //console.log("name" + ": " + test1[single].mission_name);
            }
        }
    }

    function echo_single_information(single_number, title){

        for(var single in test1){

            var number = test1[single].flight_number;
    
            if(number == single_number){
                console.log(title + ": " + test1[single][`${title}`]);
                //console.log("flight_number" + ": " + test1[single]['flight_number']);
                //console.log("name" + ": " + test1[single].mission_name);
            }
        }
    }

    function echo_second_single_information(single_number, title, second_title){

        for(var single in test1){

            var number = test1[single].flight_number;
    
            if(number == single_number){
                console.log(title + "." + second_title + ": " + test1[single][`${title}`][`${second_title}`]);
                //console.log("flight_number" + ": " + test1[single]['flight_number']);
                //console.log("name" + ": " + test1[single].mission_name);
            }
        }
    }
    
    function echo_first_id_information(single_number){

        for(var single in test1){

            var number = test1[single].flight_number;
    
            if(number == single_number){

                for (var cores in test1[single][`rocket`][`first_stage`]){
                    console.log("First_Stage_ID: " + test1[single][`rocket`][`first_stage`][cores][0][`core_serial`]);
                }

                //console.log("First_Stage_ID: " + test1[single][`rocket`][`first_stage`]['cores']['core_serial']);
                //console.log("flight_number" + ": " + test1[single]['flight_number']);
                //console.log("name" + ": " + test1[single].mission_name);
            }
        }
    }

    //echo_information(54, 60, "flight_number");
    //echo_information(54, 60, "mission_name");
    //echo_single_information(60, "flight_number");

    for(var i = 60; i <= 77; i++){
        echo_single_information(i, "flight_number");
        echo_single_information(i, "mission_name");
        echo_second_single_information(i, "rocket", "rocket_id");
        echo_first_id_information(i)
    }


    /* for(var single in test1){

        var number = test1[single].flight_number;

        if(number == 60){
            console.log("flight_number" + ": " + test1[single].flight_number);
            console.log("name" + ": " + test1[single].mission_name);
        }
    } */

    /* for(var single in test1){
        console.log("flight_number" + ": " + test1[single].flight_number);
        console.log("name" + ": " + test1[single].mission_name)
    } */


    //console.log(test1);
    //var reused = test1.rocket.fairings.reused;
    //console.log(reused);
});