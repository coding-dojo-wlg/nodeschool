module.exports = function (dir_path, ext, callback) {
  var fs = require('fs')
  var path = require('path')

  fs.readdir(dir_path, function(err, list) {
    var count = 0;
    list.forEach(function(file) {
      if (path.extname(file) === '.' + ext) {
        callback(err, file)
      }
    })
  })
}
