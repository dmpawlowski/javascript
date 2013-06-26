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
  var input = document.getElementById('input');
  var taskContent = document.createTextNode(input.value);
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  var p = document.createElement('p');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  //input.value = null;
  var taskString = input.value;
  
  var inputTask = {
    task : taskString
  };
  tasks.push(inputTask);
  var context = {
    tasks : tasks
  }
  console.log(taskContent);
  console.log(inputTask);
  var taskList = document.getElementById('taskList');
  var source = taskList.innerHTML;
  var template = Handlebars.compile(source);
  var replace = document.getElementById("replace");
  replace.innerHTML = template(context);

}

function CheckboxListener(){
  var ulNode = document.getElementById('replace');
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

function HandlebarTry(){
  var name = document.getElementById('name');
  var replace = document.getElementById('replace');
  console.log(name);
  var profileName = {
    name : "Donny"
  };
  var source = name.innerHTML;
  console.log(source);
  var template = Handlebars.compile(source);
  replace.innerHTML = template(profileName);

}

AddTask();
CheckboxListener();
//HandlebarTry();
