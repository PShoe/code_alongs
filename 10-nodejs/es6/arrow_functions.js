var sayHi = function(name){
  return `hi ${name}`
}

var sayHi = name => `hi ${name}` //only one param and one line in body

var sayHi = () => `hi dt`


var sayHi = (firstname, lastname) => {
  var number = 1 + 1
  return `hi ${firstname} ${lastname}`
}

const languages = ['ruby','php','js','es6']

// es5
// const languagesUpcased = languages.map(function(language){
//   return language.toUpperCase()
// })

// es6
const languagesUpcased = languages.map(language => language.toUpperCase())

console.log(languagesUpcased)
