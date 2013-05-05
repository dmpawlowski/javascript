function Greeter(){
  Greeter.prototype.greet = function(){
    console.log("Hello World!");
  }
}



var greeter = new Greeter();
if (greeter.__proto__ === Greeter.prototype){
  console.log("Hooray");
}
greeter.greet();
