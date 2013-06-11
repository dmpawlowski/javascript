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
  console.log("cb lenght = " + cb.length);
  for (i = 1; i <= cb.length; i ++){
    console.log("i = " + i);
    cb[i-1].addEventListener('click', CompleteToDo);
  }
}

function CompleteToDo(e){
  var cb = e.target;
  var node = cb.parentNode;
  console.log('parent' + node);
  var task = node.querySelector('p');
  console.log(cb);
  if (cb.checked === true){
    console.log('checked');
    task.className = "grayout";
  }
} 


AddToDo();
