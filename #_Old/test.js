var json = {  
    "table":[  
       { "row":[  
             {"STATE":"A"},
             {"COUNT":"107"}
          ]
       },
       { "row":[  
             {"STATE":"I"},
             {"COUNT":"92"}
          ]
       },
       { "row":[  
             {"STATE":"R"},
             {"COUNT":"2"}
          ]
       }
    ]
 };
 
 var table = json.table;
 
 for( var row in table ) {    
     for( var field in table[row] ) {
         console.log( 'State: ' + table[row][field][0].STATE);
         console.log( 'Count: ' + table[row][field][1].COUNT);
     }
 }