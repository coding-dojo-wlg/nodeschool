var http = require('http')

results = {};

for(var i = 0; i < 3; i++){
  myfunc(process.argv[2+i], i);
}

function myfunc(url, num) {
  http.get(url, function(response){
    var responseconcat = '';
    response.setEncoding('utf8');
    response.on('data', function(data){
      responseconcat += data;
    });
    response.on('end', function(data){
      results[num] = responseconcat;

      if(Object.keys(results).length == 3){
        // print the final results
        for(var j = 0; j < 3; j++){
          console.log(results[j]);
        }
      }
    });
  });
}

