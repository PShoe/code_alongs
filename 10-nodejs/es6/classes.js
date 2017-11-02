class Animal {

  constructor(name){
    this.name = name
    this.age = age
    this.toys = []
  }
  getName(){
    return this.name
  }

}

var a1 = new Animal('lucky13')
var a2 = new Animal('crab hands')

console.log(a2.getName())

// factory or module pattern
// function animalMaker(name) {
//   var name = name
//
//   return {
//     getName: () => name
//   }
// }
