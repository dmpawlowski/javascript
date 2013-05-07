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


function Greeter4(){
}
Greeter4.prototype.setLanguage = function(lang){
  this.greeting = "Hola";
}
Greeter4.prototype.setGreeting = function(greeting){
  this.greeting = greeting;
}
Greeter4.prototype.greet = function(name){
  this.name = name;
  greeter4.print();
}
Greeter4.prototype.greetSheepishly = function(name){
  this.name = name;
  this.punc = "?";
  greeter4.print();
}
Greeter4.prototype.greetExcitedly = function(name){
  this.name = name;
  this.punc = "!";
  greeter4.print();
}
Greeter4.prototype.print = function(){
  console.log(this.greeting + " " + this.name + this.punc);  
  this.punc = ".";
  this.greeting = "Hello";
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

console.log("******");

var greeter4 = new Greeter4();
greeter4.setGreeting("Hi");
greeter4.greetSheepishly("Don");
greeter4.greet("Joe");
greeter4.setGreeting("Yo");
greeter4.greetExcitedly("Josh");
greeter4.setGreeting("Hello");
greeter4.greet("Kevin");
greeter4.setLanguage("es");
greeter4.greetExcitedly("Jose");
