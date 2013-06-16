function linkClick(){
  var a = document.getElementsByTagName("a");
  for (i = 1; i <= a.length; i ++){
    a[i-1].addEventListener("click", displayPic);
  }
}

function displayPic(evt){
  evt.preventDefault();
  var a = evt.target;
  var source = a.getAttribute('href');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src', source);
}

linkClick();
