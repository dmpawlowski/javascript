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

function CreateTaskElements(){
  var taskString = input.value;
  //how does the above line work? input isn't defined
  var inputTask = {
    task : taskString
      //state (imcomplete vs complete) (css)
  };
  tasks.push(inputTask);
  var context = {
    tasks : tasks
  }
  var taskList = document.getElementById('taskList');
  var source = taskList.innerHTML;
  var template = Handlebars.compile(source);
  //var replace = document.getElementById("replace");
  replace.innerHTML = template(context);
  input.value = null;
  localStorage.setItem('context', JSON.stringify(context));
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
}

function CompletedTaskStyle(evt){
  var chbx = evt.target;
  var liNode = chbx.parentNode;
  var ulNode = liNode.parentNode;
  var task = liNode.querySelector('p');
  task.classList.toggle('grayout');
  if (task.className === 'grayout'){
    liNode = ulNode.appendChild(liNode);
  };
} 

function RestoreSession(){
  if (localStorage.getItem('context') === null){
  }
  else {
    console.log('local storage!');
    var stored = localStorage.getItem('context');
    var convertedStored = JSON.parse(stored);
    var taskList = document.getElementById('taskList');
    var source = taskList.innerHTML;
    var template = Handlebars.compile(source);
    var replace = document.getElementById("replace");
    replace.innerHTML = template(convertedStored);
  }
}

function EditTask(evt){
  console.log('edit!');
  var oldElement = evt.srcElement;
  var oldText = evt.srcElement.innerHTML;
  var input = document.createElement("input");
  input.value = oldText;
  input.type = "text";
  console.log(oldElement);
  console.log(oldElement.parentNode);
  oldElement.parentNode.replaceChild(input, oldElement);
}

RestoreSession();
AddTask();
CheckboxListener();

//use the task array as the data base
//split create elements into two funciton
//one that reads/writes to the database 
//one that displays the database
//json api
