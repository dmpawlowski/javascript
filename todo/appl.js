function AddTask(){
  var input = document.getElementById('input');
  input.onkeypress = function(e){
    if (e.keyCode === 13){
      CreateTaskElements();
    }
  };
  var button = document.getElementById('button');
  button.addEventListener('click', CreateTaskElements);
}

var tasks = [];

function CreateTaskElements(evt){
  var taskString = input.value;
  //how does the above line work? input isn't defined
  var checkedState = false;
  var inputTask = {
    task : taskString,
    state : checkedState 
  };
  tasks.push(inputTask);
  if (taskString !== "") {
    DisplayTaskElements();
  }
}

function DisplayTaskElements(){
  var context = {
    tasks : tasks
  }
  var taskList = document.getElementById('taskList');
  var source = taskList.innerHTML;
  var template = Handlebars.compile(source);
  var replace = document.getElementById("replace");
  replace.innerHTML = template(context);
  input.value = null;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function CheckboxListener(){
  var ulNode = document.getElementById('replace');
  ulNode.addEventListener('dblclick', function(evt){
    if (evt.target && evt.target.nodeName === "P"){
      EditTask(evt);
    }
  });
  ulNode.addEventListener('click', function(evt){
    if (evt.target && evt.target.nodeName === "INPUT"){
      CompletedTaskStyle(evt);
    }
  });
  ulNode.addEventListener('dragstart', function(evt){
    if (evt.target && evt.target.nodeName === "LI"){
      DragEvent(evt);
    }
  });
}

function DragEvent(evt){
  evt.srcElement.style.opacity = '0.4';
}

function CompletedTaskStyle(evt){
  var chbx = evt.target;
  var liNode = chbx.parentNode;
  var ulNode = liNode.parentNode;
  var task = liNode.querySelector('p');
  for(var i = 0; i < tasks.length; i++){
    if (tasks[i].task === task.innerHTML){
      console.log('yay!' + i);
      task.classList.toggle('grayout');
      tasks[i].state = !tasks[i].state;
      console.log(tasks[i].state);
    }
  }
  if (task.className === 'grayout'){
    liNode = ulNode.appendChild(liNode);
  };
  localStorage.setItem('tasks', JSON.stringify(tasks));
} 

function RestoreSession(){
  if (localStorage.getItem('tasks') === null){
  }
  else {
    console.log('local storage!');
    var stored = localStorage.getItem('tasks');
    var convertedStored = JSON.parse(stored);
    tasks = convertedStored;
    DisplayTaskElements();
  }
}

function EditTask(evt){
  var oldElement = evt.srcElement;
  var oldText = evt.srcElement.innerHTML;
  var context = {
    oldText : oldText
  }
  var edit = document.getElementById('edit');
  var source = edit.innerHTML;
  var template = Handlebars.compile(source);
  var replace = oldElement;
  replace.innerHTML = template(context);
  var saveBtn = document.getElementById('save');
  saveBtn.addEventListener('click', function(){
    replaceText = document.getElementById('editInput').value;
    console.log(replaceText);
    for(var i = 0; i < tasks.length; i++){
      if (tasks[i].task === oldText){
        console.log('found task');
        console.log('tasks before' + tasks[i].task);
        tasks[i].task = replaceText;
        console.log('tasks after' + tasks[i].task);
        DisplayTaskElements();
      }
    }
  });
  var discardBtn = document.getElementById('discard');
  discardBtn.addEventListener('click', function(){
    DisplayTaskElements();
  });
}

RestoreSession();
AddTask();
CheckboxListener();

//use the task array as the data base
//split create elements into two funciton
//one that reads/writes to the database 
//one that displays the database
//json api
