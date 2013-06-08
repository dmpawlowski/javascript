function AddToDo(){
  var input = document.getElementsByClassName('input');
  var button = document.getElementsByTagName('button');
  button[0].addEventListener('click', CreateToDo);
}

function CreateToDo(){
  var li = document.createElement('li');
  var content = document.createTextNode('yay');
  var ul = document.getElementsByTagName('ul');
  ul[0].appendChild(li);
}

AddToDo();
