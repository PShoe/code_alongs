console.log(process.argv[2] + process.argv[3] + process.argv[4]);

total = 0;
for(var i = 2; i < process.argv.length; i++) {
  total = total + +process.argv[i];
}

console.log(total);
