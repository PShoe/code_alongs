console.log('working?')

var tasks = [{
  name: 'eat',
  completed: false
},
{
  name: 'sleep',
  completed: false
}];

var addNewTask = function (name) {
  //input
  var newTask = {
    name: name,
    completed: false
  }
  //processing
  //output
  tasks.push(newTask);
}


//===========================

// Presentation functions
var tasksUL = document.querySelector('.tasks');
var addBtn = document.querySelector('.add-btn');
var newTaskInput = document.querySelector('.new-task-input')

var renderTasks = function () {
  // clear list
  tasksUL.innerHTML = "";
  // for each task object inside tasks array,
  tasks.forEach(function(task){
    //make a new li item
    var newListItem = document.createElement('li');
    newListItem.textContent = task.name;
    //apend to task UL
    tasksUL.appendChild(newListItem);
  })
}

renderTasks();

addBtn.addEventListener('click', function (){
  //get user input
  var newTaskName = newTaskInput.value;
  //add new task
  addNewTask(newTaskName);
  //render
  renderTasks();
})
