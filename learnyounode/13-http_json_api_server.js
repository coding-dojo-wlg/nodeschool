var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });

  var parsed_url = url.parse(req.url, true);
  var isotime = parsed_url.query.iso;
  var date = new Date(isotime);

  if(parsed_url.pathname == '/api/unixtime'){
    var retval = {unixtime: date.getTime()};
  }else if(parsed_url.pathname == '/api/parsetime'){
    var retval = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()};
  }

  var retstr = JSON.stringify(retval);
  res.end(retstr)
});

server.listen(port);
