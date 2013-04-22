var greeter = {
  greet: function(name){
    console.log("Hello " + name);
  }
};

greeter.greet("Joe");


var greeter2 = {
  greeting: "Hello",
  greet: function(name){
    console.log(this);
    console.log(this.greeting + " " + name);
  }
};


greeter2.greet("Bob");
greeter2.greeting = "Hi";
greeter2.greet("Joe");

var greet = greeter2.greet;
greet("Joe");

