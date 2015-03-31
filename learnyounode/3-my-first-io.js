var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])

var string_array = buffer.toString().split('\n')

console.log(string_array.length - 1)
