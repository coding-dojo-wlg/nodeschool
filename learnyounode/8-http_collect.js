var http = require('http')

http.get(process.argv[2], function(response){
  var responseconcat = '';
  response.setEncoding('utf8');
  response.on('data', function(data){
    responseconcat += data;
  });
  response.on('end', function(data){
    console.log(responseconcat.length);
    console.log(responseconcat);
  });
});
