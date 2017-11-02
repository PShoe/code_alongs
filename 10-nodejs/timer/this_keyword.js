// 4 to 5 rules

// how to work the context

// 1. default binding

function doStuff() {
  console.log(this);
}

// doStuff(); //global or undefined

// 2. Implicit binding

var boo = {
  doStuff: function(){
    console.log(this)
  }
}
boo.doStuff() // boo object

// 3. Explicit binding

doStuff.call({ haha: 'over here' })
var person = { name: 'me' }
doStuff.apply(person)

// 4. Hard binding

var hardStuff = doStuff.bind({ hard:'core' })
hardStuff()

// 5. Puff Magic constructor functions --overrides everything

new doStuff()
// returns a new object with this binded to it
function cat() {
  this.name = 'unicorn'
  // return this
}
var c1 = new cat()
