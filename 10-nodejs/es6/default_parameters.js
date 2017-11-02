function greeting(name = 'dt') {
  // name = name || 'dt' //before es6
  return 'hello ' + name;
}
console.log(greeting('lucky13'));
console.log(greeting());


function greeting(option = {name:'lucky13'}){
  return 'hello ' + option.name
}
greeting({name:'dt'})
