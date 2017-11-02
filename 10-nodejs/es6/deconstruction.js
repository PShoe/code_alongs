function getFavColor() {
  return ['pink','mistyrose']
}

// var favColors = getFavColor();
var [leastFavColor, favColor] = getFavColor();
console.log(favColor);

function getPerson(){
  return {
    name: 'lucky13',
    age: '13'
  }
}

var { name: personName } = getPerson();
console.log(personName); //lucky13

var { name, age } = getPerson();
console.log( name, age); //lucky13
console.log( personName, age); 
