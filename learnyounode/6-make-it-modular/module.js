module.exports = function (dir_path, ext, callback) {
  var fs = require('fs')
  var path = require('path')

  fs.readdir(dir_path, function(err, list) {
    if (err)
      return callback(err)

    var results = []
    list.forEach(function(file) {
      if (path.extname(file) == '.' + ext)
        results.push(file)
    })
    callback(null, results)
  })
}
