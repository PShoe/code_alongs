window.addEventListener('load', function() {
  var h1 = document.querySelector('h1');
  console.log(h1.textContent);

  // similar to querySelector().addEventListener
  $('.stuff').on('click', function(event) {
    console.log(event.target.textContent);
  })

});

// var sample = function(arr) {
//   var index = Math.floor(Math.random() * arr.length);
//   return arr[index];
// };

// wdiLib.sample

var wdiLib = {
  // sample: sample,
  sample: function(arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
}

var scores = {
  jon: 5,
  fiona: 6
}

_.each(scores, function(score, name) {
  console.log('key is '+  name + ' value is ' + score);
  console.log(name);
})
