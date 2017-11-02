function greeting(firstname = 'lucky', lastname = '13'){
  return 'hello' + firstname + " " + lastname //before es6
}

function greeting(firstname = 'lucky', lastname = '13'){
  return `hello ${firstname} ${lastname}` //es6
}
