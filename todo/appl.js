function AddTask(){
  var button = document.getElementById('button');
  button.addEventListener('click', CreateTask);
}

function CreateTask(){
  var input = document.getElementById('input');
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  var p = document.createElement('p');
  var content = document.createTextNode(input.value);
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  ul.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(p);
  p.appendChild(content)
  CheckboxListener();
}

function CheckboxListener(){
  var cb = document.getElementsByClassName('checkbox');
  for (i = 1; i <= cb.length; i ++){
    cb[i-1].addEventListener('click', CompleteTask);
  }
}

function CompleteTask(e){
  var cb = e.target;
  var node = cb.parentNode;
  var task = node.querySelector('p');
  task.classList.toggle('grayout');
} 


AddTask();
