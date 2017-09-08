console.log("To Do App")

var listItems = document.querySelectorAll('li');

var toggleComplete = function (event) {
  event.target.classList.toggle('completed');
};

listItems.forEach(function (elem){
  elem.addEventListener('click',toggleComplete);
});

// toggleComplete(event)//happening somewhere behind the scenes

var addBtn = document.querySelector('.add-btn');
var newItemInput = document.querySelector('.new-item');
var toDoList = document.querySelector('ul');

addBtn.addEventListener('click', function(event){
  var newItemValue = newItemInput.value;
  var newListItem = document.createElement('li');
  newListItem.textContent = newItemValue;
  newListItem.addEventListener('click', toggleComplete);
  toDoList.appendChild(newListItem);
  newItemInput.value = '';
  });
