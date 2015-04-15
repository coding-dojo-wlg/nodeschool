var net = require('net');

var port = process.argv[2];

function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

var server = net.createServer(function(socket){
  var date = new Date();
  var data = ""+date.getFullYear()+"-"+pad(date.getMonth()+1)+"-"+pad(date.getDate())+" "+pad(date.getHours())+":"+pad(date.getMinutes());
  socket.end(data);
});

server.listen(port);
