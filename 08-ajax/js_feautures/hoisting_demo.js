// function declaration:
// -name function, it has a name, which helps with debugging/errors
// - hoists
function doSomething(fn,arg) {
  console.log('doing something')
  fun(arg);
}

// function expression:
var bam  = function() {
  console.log(fruit);
  var fruit = "banana"
}
bam();

doSomething(bam,'abc');
addEventListener('click', function())
