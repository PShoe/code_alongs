var todos = ['one','two','three'];

var $toDoList = $('#todo-list');
var $newToDoInput = $('#new-todo-input');
var $addToDoBtn = $('#add-todo-btn');


$('#add-todo-btn').on('click', function() {
  var $newListItemText = $newToDoInput.val()
  var $newListItem = $('<li>').text($newListItemText)

  // $newListItem.on('click', function(event) {
  //   // event.target.classList.add('cross-out');
  //   $(event.tagret).toggleClass("cross-out");
  //
  // })

  $toDoList.append($newListItem)
  $newToDoInput.val('');
})

// li below is any css rule --

$('ul').on('click', 'li', function(event) {
  $(event.target).toggleClass("cross-out");
  // console.log(event.target.textContent);
});

// window.addEventListener('load', function() {
  todos.forEach(function(element){
    var $newListItem = $('<li>').text(element);
    $toDoList.append($newListItem)
  })
// })

// _.each(todos, function(element){
//   var $newListItem = $('<li>').text(element);
//   $toDoList.append($newListItem);
// })

// <strike> or <s>
// $('li')[0].outerHTML = ()

// $('#new-todo-input').val()
//
// $('<li>') //make list item
// $('li') //search list item
// $('<li>').text("hello") //add text to list item
// var $newListItem = $('<li>').text("hello")
// $('ul').append($newListItem)
