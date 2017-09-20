console.log('hello world');

var one = function () {
  console.log('I am function one');
  two();
}

var two = function () {
  console.log('I am function two')
}

// addEventListener('click', two);

setTimeout(function(){
  console.log('time is up');
},1000);

var three = function (fn) {
  fn();
}

three(two);
one();
