//create class
function Greeter(){
  Greeter.prototype.greet = function(){
    console.log("Hello World!");
  }
}



var greeter = new Greeter(); //constructor
//check to see if class is built properly
if (greeter.__proto__ === Greeter.prototype){
  console.log("Hooray");
}
greeter.greet();
