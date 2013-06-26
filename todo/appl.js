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
  }
}


RestoreSession();
AddTask();
CheckboxListener();
