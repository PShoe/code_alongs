var fs = require('fs');

// callback signature
fs.readFile('ex1.js', 'utf-8', function(err, data) {
  console.log(data);
})

console.log('end of ex5.js file here !!!!!!');
