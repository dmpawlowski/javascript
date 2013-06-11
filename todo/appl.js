function AddToDo(){
  var button = document.getElementsByTagName('button');
  button[0].addEventListener('click', CreateToDo);
}

function CreateToDo(){
  var input = document.getElementsByClassName('input');
  var li = document.createElement('li');
  var p = document.createElement('p');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  var content = document.createTextNode(input[0].value);
  li.appendChild(checkbox);
  li.appendChild(p);
  p.appendChild(content)
  var ul = document.getElementsByTagName('ul');
  ul[0].appendChild(li);
  Checkbox();
}

function Checkbox(){
  var cb = document.getElementsByClassName('checkbox');
  for (i = 1; i <= cb.length; i ++){
    cb[i-1].addEventListener('click', CompleteToDo);
  }
}

function CompleteToDo(e){
  var cb = e.target;
  var node = cb.parentNode;
  var task = node.querySelector('p');
  if (task.className.match("grayout")){
    console.log("matched");
    task.className = "";
  } 
  else{
    task.className = "grayout";
    console.log("didnt match");
  }
} 


AddToDo();
