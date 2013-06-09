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
  checkbox.id = 'checkbox';
  var content = document.createTextNode(input[0].value);
  li.appendChild(checkbox);
  li.appendChild(p);
  p.appendChild(content)
  var ul = document.getElementsByTagName('ul');
  ul[0].appendChild(li);
  Checkbox();
}

function Checkbox(){
  var cb = document.getElementById('checkbox');
  if (cb){
  cb.addEventListener('click', function(){
    if (cb.checked == true){
      console.log('yay');
      var task = document.getElementsByTagName('p');
      task[0].className = "grayout";
    }
  });
  }
}

AddToDo();
