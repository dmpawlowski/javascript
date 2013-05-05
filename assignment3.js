//create class
function Greeter1(){
}

Greeter1.prototype.greet = function(){
  console.log("Hello World!");
}



function Greeter2(name){
}
Greeter2.prototype.greet = function(name){
  this.name = name
  console.log("Hello " + name + "!");
}


function Greeter3(name){
}
Greeter3.prototype.greet = function(name){
  this.name = name
  console.log(this.greeting + " " + name + "!");
}
Greeter3.prototype.setGreeting = function(greeting){
  this.greeting = greeting
}


var greeter1 = new Greeter1(); //constructor
//check to see if class is built properly
if (greeter1.__proto__ === Greeter1.prototype){
  console.log("Hooray");
}
greeter1.greet();

console.log("********");

var greeter2 = new Greeter2();
greeter2.greet("Don");
greeter2.greet("Joe");

console.log("********");

var greeter3 = new Greeter3();
greeter3.setGreeting("Hi");
greeter3.greet("Don");
greeter3.setGreeting("Hello");
greeter3.greet("Joe");
