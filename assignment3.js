//create class
function Greeter1(){
  Greeter1.prototype.greet = function(){
    console.log("Hello World!");
  }
}



var greeter1 = new Greeter1(); //constructor
//check to see if class is built properly
if (greeter1.__proto__ === Greeter1.prototype){
  console.log("Hooray");
}
greeter1.greet();
