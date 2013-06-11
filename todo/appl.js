function AddTask(){
  var button = document.getElementById('button');
  button.addEventListener('click', CreateTask);
}

function CreateTask(){
  var input = document.getElementById('input');
  var li = document.createElement('li');
  var p = document.createElement('p');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  var content = document.createTextNode(input.value);
  var ul = document.getElementById('list');

  li.appendChild(checkbox);
  li.appendChild(p);
  p.appendChild(content)
  ul.appendChild(li);
  Checkbox();
}

function Checkbox(){
  var cb = document.getElementsByClassName('checkbox');
  for (i = 1; i <= cb.length; i ++){
    cb[i-1].addEventListener('click', CompleteTask);
  }
}

function CompleteTask(e){
  var cb = e.target;
  var node = cb.parentNode;
  var task = node.querySelector('p');
  if (task.className.match("grayout")){
    task.className = "";
  } 
  else{
    task.className = "grayout";
  }
} 


AddTask();
