
//JAVASCRIPT OUTPUT
//Output using alert
//window.alert("Hello, World!");
  
//Output using the console
console.log("Hello, World!");
  
//Output using innerHTML
  document.getElementById("demo1").innerHTML = "Hello, World!";

//Output Using a function
  function printHelloWorld() {
    document.getElementById("demo2").innerHTML = "Hello, World!";
  }
  
//JAVASCRIPT STATEMENTS
//JavaScript statement structure
function demo3() {
  let x, y, z;
  x = 5;
  y = 6;
  z = x + y;
  
  document.getElementById("demo3").innerHTML = "The value of z is " + z + ".";
}

//JAVASCRIPT SYNTAX

//Javascript Numbers
function demo4() {
  document.getElementById("demo4").innerHTML = 10.54;
  
  document.getElementById("demo4").innerHTML= 10001;
}
//Javascript Strings
function demo5() {
  document.getElementById("demo5").innerHTML = "John Doe";
  document.getElementById("demo5").innerHTML = 'John Doe';
}

//Javascript Variables
function demo6() {
  let x;
  x = 6;
  
  document.getElementById("demo6").innerHTML = x;
}
//Javascript Operators
function demo7() {
  document.getElementById("demo7").innerHTML = (5 + 6) * 10;
}


//JavaScript Keyword
function demo8() {
 let x, y;
 x = 5 + 6;
 y = x * 10;
 
document.getElementById("demo8").innerHTML = y;
}
//JS Comments
/*
Multiline comment in JS
*/
//JavaScript Identifiers/Names
function demo9() {
  let lastname, lastName;
  lastName = "Doe";
  lastname = "Peterson";

  document.getElementById("demo9").innerHTML =lastname;
}

