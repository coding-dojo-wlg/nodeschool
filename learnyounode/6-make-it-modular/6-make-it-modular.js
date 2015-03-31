var my_module = require('./module.js')

var path_name = process.argv[2]
var ext = process.argv[3]

my_module(path_name, ext, function(err, data) {
  if (!err) {
    data.forEach(function(file) {
      console.log(file)
    })
  }
})
