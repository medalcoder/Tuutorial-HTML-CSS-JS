
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

//JAVASCRIPT COMMENTS
//Single line comment

//Using comment to prevent execution
/*
Multiline comment in JS
*/

/*
function demo9() {
  let lastname, lastName;
  lastName = "Doe";
  lastname = "Peterson";

  document.getElementById("demo9").innerHTML =lastname;
}
*/

//JAVASCRIPT VARIABLES

//Variables are Containers for Storing Data

//Using var
function demo10() {
  var x = 5;
  var y = 6;
  var z = x + y;
  document.getElementById("demo10").innerHTML = "The value of z is: " + z;
}

demo10();

//Using Let
function demo11() {
  let x = 5;
  let y = 6;
  let z = x + y;

  document.getElementById("demo11").innerHTML = "The value of z is: " + z;
}

//Using const
function demo12() {
  const x = 5;
  const y = 6;
  const z = x + y;

  document.getElementById("demo12").innerHTML = "The value of z is: " + z;
}

//Using const
function demo13() {
  const price1 = 5;
  const price2 = 6;
  let total = price1 + price2;

  document.getElementById("demo13").innerHTML = "The value of the commodity is : " + total;
}

