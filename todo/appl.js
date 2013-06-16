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
  CheckboxListener();
}

function CheckboxListener(){
  var chbx = document.getElementsByClassName('checkbox');
  for (i = 1; i <= chbx.length; i ++){
    chbx[i-1].addEventListener('click', CompletedTaskStyle);
  }
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


AddTask();
