function AddToDo(){
  var button = document.getElementsByTagName('button');
  button[0].addEventListener('click', CreateToDo);
}

function CreateToDo(){
  var input = document.getElementsByClassName('input');
  var li = document.createElement('li');
  var content = document.createTextNode(input[0].value);
  li.appendChild(content);
  var ul = document.getElementsByTagName('ul');
  ul[0].appendChild(li);
}

AddToDo();
