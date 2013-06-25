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

function CreateTaskElements(){
  var input = document.getElementById('input');
  var taskContent = document.createTextNode(input.value);
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  var p = document.createElement('p');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  ul.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(p);
  p.appendChild(taskContent)
  //input.value = null;
  console.log(input)
  var taskString = input.value;

  var inputTask = {
    task : taskString
  };
  console.log(taskContent);
  console.log(inputTask);
  var taskList = document.getElementById('taskList');
  var source = taskList.innerHTML;
  var template = Handlebars.compile(source);
  replace.innerHTML = template(inputTask);

}

function CheckboxListener(){
  var ulNode = document.getElementById('list');
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
