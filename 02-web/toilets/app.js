console.log('toilet exercise');

var bowl = document.querySelector ('.bowl');
var flushBtn = document.querySelector('.flush-btn');


var poop = function () {
  bowl.classList.add('poop');
}

var flush = function () {
  bowl.classList.remove('poop');
}

bowl.addEventListener('click',poop);
