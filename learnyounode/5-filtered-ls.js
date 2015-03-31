var fs = require('fs')
var path = require('path')
var dir_path = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dir_path, function(err, list) {
  var count = 0;
  list.forEach(function(file) {
    if (path.extname(file) == ext)
      console.log(file)
  })
})
