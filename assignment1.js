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
  if (options != undefined){
    greeting = languageCode(options["language"]);
  }
  else{
    greeting = "Hello";
  }
  console.log(greeting + " " + name + "!");
 }


function sayHello6(name, options){
  var name = name;
  var greeting;
  var punctuation;
  if (options != undefined && options["emotion"] != undefined){
    punctuation = emotionCode(options["emotion"]);
  }
  else {
    punctuation = "!";
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
  console.log(greeting + " " + name + punctuation);
}


function languageCode(language){
  var language = language;
  var greeting;
  if (language == "es"){
    greeting = "Hola"
  }
  else{
    greeting = "Hello"
  }
  return greeting;
}


function emotionCode(emotion){
  var emotion = emotion;
  var punctuation;
  if (emotion == "sheepishly"){
    punctuation = "?";
  }
  else if (emotion == "normally"){
    punctuation = ".";
  }
  else {
    punctuation = "!";
  }
  return punctuation;
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

