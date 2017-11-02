const favColor = 'mistyrose'

console.log(favColor)

// favColor = 'pink';
 // gives an error;
 // problem is, works for all primitives

const account = {
  balance: 1000
}

Object.freeze(account);
// no one should be able to change this
// only works for shallow objects
// an array = primitive (shallow), an array of arrays, not shallow

account.balance = 0;

console.log(account.balance);
