function sayHello(name, options){
  var name = name;
  var greeting;
  if (options != undefined){
    greeting = options["greeting"];
  }
  else{
    greeting = "Hello";
  }
  console.log(greeting + " " + name + "!");
}


function sayHello5(name, options){
  var name = name;
  var greeting;
  if (options != undefined && options["language"] == "es"){
    greeting = "Hola";
  }
  else{
    greeting = "Hello";
  }
  console.log(greeting + " " + name + "!");
 }


function sayHello6(name, options){
  var name = name;
  var greeting;
  var emotion;
  if (options == undefined){
    emotion = "!"
  }
  else if (options["emotion"] == "sheepishly"){
    emotion = "?";
  }
  else if (options["emotion"] == "normally"){
    emotion = ".";
  }
  else {
    emotion = "!";
  }
  if (options == undefined){
    greeting = "Hello"
  }
  else if (options["greeting"] == undefined){
    greeting = "Hello"
  }
  else {
    greeting = options["greeting"];
  }
  console.log(greeting + " " + name + emotion);
}

//sayHello("Don", "Hi");
//sayHello("Joe", "Hello");
//sayHello("Don", { greeting: "Yo" });
//sayHello("Joe");
//sayHello5("Don", { language: "en"});
//sayHello5("Jose", { language: "es"}); 
//sayHello5("Josh");
sayHello6("Don", { emotion: "sheepishly", greeting: "Hi"});
sayHello6("Joe", { emotion: "normally" });
sayHello6("Josh", { emotion: "excitedly", greeting: "Yo"});
sayHello6("Kevin");

