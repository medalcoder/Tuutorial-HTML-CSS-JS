
//JS TUTORIAL

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

//Mixing variable types
function demo13() {
  const price1 = 5;
  const price2 = 6;
  let total = price1 + price2;

  document.getElementById("demo13").innerHTML = "The value of the commodity is : " + total;
}

//Using undefined variables
function demo14() {
  let carName;
  document.getElementById("demo14").innerHTML = carName;
}

//Redeclaring Javascript variables
function demo15() {
  var carName = "Volvo";
  var carName;
  document.getElementById("demo15").innerHTML = carName;
}

//JavaScript Arithmetic
function demo16() {
  const x = 5 + 2 + 3;
  document.getElementById("demo16").innerHTML = x;
}

//String Concatenation
function demo17() {
  let x = "John" + " " + "Doe";
  document.getElementById("demo17").innerHTML = x;
}
//Number and String Concatenation
function demo18() {
  let x = "5" + 2 + 3;
  document.getElementById("demo18").innerHTML = x;
}

//JavaScript Dollar Sign $
function demo19() {
  let $ = "Hello World";
  let $$$ = 2;
  let $money = 5;

  document.getElementById("demo19").innerHTML = $$$ + $money;
}
//JavaScript Underscore(_)
function demo20() {
  let _lastName = "Johnson"
  let _x = 2;
  let _100 = 5;

  document.getElementById("demo20").innerHTML = _x + _100;
}

//JAVASCRIPT LET
//This chapter explains the let usage, code cannot be written here

//JAVASCRIPT CONST
//Constant Arrays
function demo21() {
  const cars = ["Saab", "Volvo", "BMW"];
  cars[0] = "Toyota";
  cars.push("Audi");

  document.getElementById("demo21").innerHTML = cars;
}

//Constant Objects
function demo22() {
  const car = {type:"Fiat", model:"500", color:"white"};
  car.color = "red";
  car.owner = "Johnson";
  
  document.getElementById("demo22").innerHTML = "Car owner is," + car.owner + " with the car color " + car.color;
}

//JavaScript Hoisting
function demo23() {
  carName = "Volvo"
  document.getElementById("demo23").innerHTML = carName;
  var carName;
}

//JAVASCRIPT OPERATORS
//JavScript Assignment
function demo24() {
  let x = 5;
  let y = 10;
  let z = x + y;

  document.getElementById("demo24").innerHTML = "The value of the commodity is " + z;
}
//JavaScript Addition
function demo25() {
  let x = 5;
  let y = 10;
  let z = x + y;

  document.getElementById("demo25").innerHTML = "The value of the commodity is " + z;
}
//JavaScript Multiplication
function demo26() {
  let x = 5;
  let y = 10;
  let z = x * y;

  document.getElementById("demo26").innerHTML = "The value of the commodity is " + z;
}
//JavaScript Arithmetic Operators
function demo27() {
  let a = 3;
  let x = (100 + 50) * a;

  document.getElementById("demo27").innerHTML = x;
}
//JavaScript Assignment Operators
function demo28() {
  let x = 10;
  x += 5;

  document.getElementById("demo28").innerHTML = x;
}
// JavaScript Comparison Operators
//JavaScript String Comparison
function demo29() {
  let text1 = "A"
  let text2 = "B"
  let result = text1 < text2;

  document.getElementById("demo29").innerHTML = "Is letter A lesser than letter B? " + result;
}

//JavaScript String Addition
function demo30() {
  let text1 = "Hello";
  let text2 = "World";
  let text3 = text1 + " " + text2;

  document.getElementById("demo30").innerHTML = "The printout phrase of every language in tech is " + text3;
}

function demo31() {
  let text1 = "Hello, ";
  text1 += "Have a nice day"

  document.getElementById("demo31").innerHTML = text1;
}
//Adding String and Numbers 
function demo32() {
  let x = 5 + 5;
  let y = "5" + 5;
  let z = "Hello" + 5;

  document.getElementById("demo32").innerHTML = x + "<br>" + y +"<br>" + z;
}

//JAVASCRIPT ARITHMETIC

// Adding
function demo33() {
  let x = 5 + 5;
  let y = 2;
  let z = x + y;

  document.getElementById("demo33").innerHTML = z;
}
// Subtracting
function demo34() {
  let x = 5 + 5;
  let y = 2;
  let z = x - y;

  document.getElementById("demo34").innerHTML = z;
}

// Multiplying
function demo35() {
  let x = 5;
  let y = 2;
  let z = x * y;

  document.getElementById("demo35").innerHTML = z;
}
// Dividing
function demo36() {
  let x = 5;
  let y = 2;
  let z = x / y;
  
  document.getElementById("demo36").innerHTML = z;
}

//Remainder
function demo37() {
  let x = 5;
  let y = 2;
  let z = x % y;
  
  document.getElementById("demo37").innerHTML = z;
}

// Incrementing
function demo38() {
  let x = 5;
  x++;
  let z = x;
  
  document.getElementById("demo38").innerHTML = z;
}

// Decrementing
function demo39() {
  let x = 5;
  x--;
  let z = x;
  
  document.getElementById("demo39").innerHTML = z;
}

// Exponentiation
function demo40() {
  let x = 5;
  let z = x ** 2;
  
  document.getElementById("demo40").innerHTML = z;
}

// Operator Precedence
function demo41() {
  let x = 100 + 50 * 3;

  document.getElementById("demo41").innerHTML = x;
}
//JAVASCRIPT ASSIGNMENT
// Assignment Operators
// The = Operator
function demo42() {
  let x = 5;
  let y = 6;

  document.getElementById("demo42").innerHTML = x + y;
}
// The += Operator
function demo43() {
  let x = 10;
  x += 5;
  
  document.getElementById("demo43").innerHTML = "Value of x is: " + x;
}

// The -= Operator
function demo44() {
  let x = 10;
  x -= 5;
  
  document.getElementById("demo44").innerHTML = "Value of x is: " + x;
}
// The *= Operator
function demo45() {
  let x = 10;
  x *= 5;
  
  document.getElementById("demo45").innerHTML = "Value of x is: " + x;
}
// The **= Operator
function demo46() {
  let x = 10;
  x **= 5;
  
  document.getElementById("demo46").innerHTML = "Value of x is: " + x;
}
// The /= Operator
function demo47() {
  let x = 10;
  x /= 5;
  
  document.getElementById("demo47").innerHTML = "Value of x is: " + x;
}
// The %= Operator
function demo48() {
  let x = 10;
  x %= 5;
  
  document.getElementById("demo48").innerHTML = "Value of x is: " + x;
}
//Shift Assignment Operators
/*Mathematically, this is equivalent to x = x * 2^y
x = -100 * 2^5
*/
// The <<= Operator
function demo49() {
  let x = -100;
  x <<= 5;
  //x = -100 * 2^5
  document.getElementById("demo49").innerHTML = "Value of x is: " + x;
}

// The >>= Operator
/*Mathematically, this is equivalent to x = x/2^y
​x = -100 / 2^5
 */
function demo50() {
  let x = -100;
  x >>= 5;

  document.getElementById("demo50").innerHTML = "Value of x is: " + x;
}
// The >>>= Operator
function demo51() {
  let x = -100;
  x >>>= 5;

  document.getElementById("demo51").innerHTML = "Value of x is: " + x;
}
//Bitwise Assignment Operators
// The &= Operator
function demo52() {
  let x = 100;
  x &= 5;

  document.getElementById("demo52").innerHTML = "The Value of x is " + x;
}
// The |= Operator
function demo53() {
  let x = 100;
  x |= 5;

  document.getElementById("demo53").innerHTML = "The Value of x is " + x;
}
// The ^= Operator
function demo54() {
  let x = 100;
  x ^= 5;

  document.getElementById("demo54").innerHTML = "The Value of x is " + x;
}

//Logical Assignment Operators
// The &&= Operator
function demo55() {
  let x = 100;
  x &&= 5;

  document.getElementById("demo55").innerHTML = "The Value of x is " + x;
}

// The ||= Operator
function demo56() {
  let x = 100;
  x ||= 5;

  document.getElementById("demo56").innerHTML = "The Value of x is " + x;
}
// The ??= Operator
function demo57() {
  let x = 100;
  x ??= 5;

  document.getElementById("demo57").innerHTML = "The Value of x is " + x;
}

//JAVASCRIPT DATA TYPES
// JavaScript string
function demo58() {
  let answer1 = "It's alright";
  let answer2 = "He is called 'Johnny'";
  let answer3 = 'He is called "Johnny"';

  document.getElementById("demo58").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;
}
// JavaScript Numbers
function demo59() {
  let x1 = 34.00;
  let x2 = 34;

  document.getElementById("demo59").innerHTML = x1 * x2;
}
// Exponential Notation
function demo60() {
  let y = 123e5;
  let z = 123e-5;

  document.getElementById("demo60").innerHTML = y + "<br>" + z;
}
// JavaScript BigInt
function demo61() {
  let y = BigInt("123456789012345678901234567890")

  document.getElementById("demo61").innerHTML = y;
}
// JavaScript Booleans
function demo62() {
  let x = 5;
  let y = 5;
  let z = 6;
  
  document.getElementById("demo62").innerHTML = (x == y) + "<br>" + (x == z);
}

// JavaScript Arrays
function demo63() {
  const cars = ["Saab", "Volvo", "BMW"];

  document.getElementById("demo63").innerHTML = cars[0];
}
// Javascript Objects
function demo64() {
  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

  document.getElementById("demo64").innerHTML = firstName;
}
// The typeof Operator
// Code written in HTML file

// Undefined
// Code written in HTML file

// Empty Values
function demo67() {
  let car = "";

  document.getElementById("demo67").innerHTML = "The value is: " + car + "<br>" + "The type is: " + typeof car;
}

//JAVASCRIPT FUNCTIONS
// Function return
// Code written in HTML file

// The () Operator
function demo69(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Function Used as Variable Values

// Local variables

//JAVASCRIPT OBJECTS
// Creating a JavaScript Object
function demo72() {

}

//Empty JavaScript Object
function demo73() {
  const person = {};

  person.firstName = "John";
  person.lastName = "Doe";
  person.age = 50;
  person.eyeColor = "blue";

  document.getElementById("demo73").innerHTML = "The victim name is " + firstName;
}

// Using the new Keyword
function demo74() {
  const person = new demo67();

  person.firstName = "John";
  person.lastName = "Doe";
  person.age = 50;
  person.eyeColor = "blue";

  document.getElementById("demo74").innerHTML = "The victim name is " + firstName;
}

// Accessing Object Properties
function demo75() {
  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"
};

document.getElementById("demo75").innerHTML = "the lastname is " + person["lastName"];
}
// JavaScript Object Methods
function demo76() {
      return this.firstname + " " + this.lastName;

    }
// JavaScript Objects are Mutable

//JAVASCRIPT OBJECT PROPERTIES
// Accessing JavaScript Properties
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyecolo: "blue"
}
// Adding New Properties

// Deleting Properties

// Nested Objects

//JAVASCRIPT OBJECT METHODS

//JAVASCRIPT OBJECT DISPLAY

//JAVASCRIPT OBJECT CONSTRUCTORS

//JAVASCRIPT EVENTS

//JAVASCRIPT STRINGS

//JAVASCRIPT STRING METHODS

//JAVASCRIPT STRING SEARCH

//JAVASCRIPT STRING TEMPLATES
// Back-Tics Syntax

// Quotes Inside Strings

// Multiline Strings

// Interpolation

// Variable Substitutions

// Expression Substitution

// HTML Templates

//JAVASCRIPT NUMBERS

//JAVASCRIPT BIGINT

//JAVASCRIPT NUMBER METHODS

//JAVASCRIPT NUMBER PROPERTIES

//JAVASCRIPT ARRAYS

//JAVASCRIPT ARRAY METHODS

//JAVASCRIPT ARRAY SORT

//JAVASCRIPT ARRAY ITERATION

//JAVASCRIPT ARRAY CONST

//JAVASCRIPT DATES

//JAVASCRIPT DATE FORMATS

//JAVASCRIPT DATE GET METHODS

//JAVASCRIPT DATA SET METHODS

//JAVASCRIPT MATH

//JAVASCRIPT RANDOM

//JAVASCRIPT BOOLEANS

//JAVASCRIPT COMPARISONS

//JAVASCRIPT IF ELSE

//JAVASCRIPT SWITCH

//JAVASCRIPT LOOP FOR

//JAVASCRIPT LOOP FOR IN

//JAVASCRIPT LOOP FOR OF

//JAVASCRIPT LOOP WHILE

//JAVASCRIPT BREAK

//JAVASCRIPT ITERABLES

//JAVASCRIPT SETS

//JAVASCRIPT SET METHODS

//JAVASCRIPT MAPS

//JAVASCRIPT MAP METHODS

//JAVASCRIPT TYPEOF

//JAVASCRIPT TYPE CONVERSION

//JAVASCRIPT DESTRUCTURING

//JAVASCRIPT BITWISE

//JAVASCRIPT REGEXP

//JAVASCRIPT PRECEDENCE

//JAVASCRIPT ERRORS

//JAVASCRIPT SCOPE

//JAVASCRIPT HOISTING

//JAVASCRIPT STRICT MODE

//JAVASCRIPT THIS KEYWORD

//JAVASCRIPT ARROW FUNCTION

//JAVASCRIPT CLASSES

//JAVASCRIPT MODULES

//JAVASCRIPT JSON

//JAVASCRIPT DEBUGGING

//JAVASCRIPT STYLE GUIDE

//JAVASCRIPT BEST PRACTICES

//JAVASCRIPT MISTAKES

//JAVASCRIPT PERFORMANCE

//JAVASCRIPT RESERVED WORDS





// JAVASCRIPT OBJECT
// JAVASCRIPT OBJECT DEFINITION

// JAVASCRIPT OBJECT PROTOTYPES

// JAVASCRIPT OBJECT METHODS

// JAVASCRIPT OBJECT PROPERTIES

// JAVASCRIPT OBJECT GET/SET

// JAVASCRIPT OBJECT PROTECTION





// JAVASCRIPT FUNCTIONS
// JAVASCRIPT FUNCTION DEFINITION

// JAVASCRIPT FUNCTION PARAMETERS

// JAVASCRIPT FUNCTION INVOCATION

// JAVASCRIPT FUNCTION CALL

// JAVASCRIPT FUNCTION APPLY

// JAVASCRIPT FUNCTION BIND

// JAVASCRIPT FUNCTION CLOSURES





//JAVASCRIPT CLASSES
//JAVASCRIPT CLASS INTRO

//JAVASCRIPT CLASS INHERITANCE

// JAVASCRIPT CLASS STATIC




//JAVASCRIPT ASYNC
//JAVASCRIPT ASYNC CALLBACKS

//JAVASCRIPT ASYNCHRONOUS

//JAVASCRIPT ASYNC






// JAVASCRIPT HTML DOM
// JAVASCRIPT DOM INTRO
// JAVASCRIPT DOM METHODS
// JAVASCRIPT DOM DOCUMENT
// JAVASCRIPT DOM ELEMENTS
// JAVASCRIPT DOM HTML
// JAVASCRIPT DOM FORMS
// JAVASCRIPT DOM CSS
// JAVASCRIPT DOM ANIMATIONS
// JAVASCRIPT DOM EVENTS
// JAVASCRIPT DOM EVENT LISTENERS
// JAVASCRIPT DOM NAVIGATION
// JAVASCRIPT DOM NODES
// JAVASCRIPT DOM COLLECTIONS 
// JAVASCRIPT DOM NODE LISTS






// JAVASCRIPT BROWSER BOM
// JAVASCRIPT WINDOW
// JAVASCRIPT SCREEN
// JAVASCRIPT LOCATION
// JAVASCRIPT HISTORY
// JAVASCRIPT NAVIGATOR
// JAVASCRIPT POPUP ALERT
// JAVASCRIPT TIMING
// JAVASCRIPT COOKIES






// JAVASCRIPT WEB APIs
// JAVASCRIPT WEB API INTRO
// JAVASCRIPT WEB FORMS API
// JAVASCRIPT WEB HISTORY API
// JAVASCRIPT WEB STORAGE API
// JAVASCRIPT WEB WORKER API
// JAVASCRIPT WEB FETCH API
// JAVASCRIPT WEB GEOLOCATION API






// JAVASCRIPT AJAX
// JAVASCRIPT AJAX INTRO
// JAVASCRIPT AJAX XMLHttp
// JAVASCRIPT AJAX REQUEST
// JAVASCRIPT AJAX RESPONSE
// JAVASCRIPT AJAX XML FILE
// JAVASCRIPT AJAX PHP
// JAVASCRIPT AJAX ASP
// JAVASCRIPT AJAX DATABASE
// JAVASCRIPT AJAX APPLICATIONS
// JAVASCRIPT AJAX EXAMPLES






// JAVASCRIPT JSON
// JAVASCRIPT JSON INTRO
// JAVASCRIPT JSON SYNTAX
// JAVASCRIPT JSON vs XML
// JAVASCRIPT JSON DATA TYPES
// JAVASCRIPT JSON PARSE
// JAVASCRIPT JSON STRINGIFY
// JAVASCRIPT JSON OBJECTS
// JAVASCRIPT JSON ARRAYS
// JAVASCRIPT JSON SERVER
// JAVASCRIPT JSON PHP
// JAVASCRIPT JSON HTML
// JAVASCRIPT JSON JSONP





// JAVASCRIPT vs JQUERY
// JQUERY SELECTORS
// JQUERY HTML
// JQUERY CSS
// JQUERY DOM






// JAVASCRIPT GRAPHICS
// JAVASCRIPT GRAPHICS
// JAVASCRIPT CANVAS
// JAVASCRIPT PLOTLY
// JAVASCRIPT CHART.JS
// JAVASCRIPT GOOGLE CHART
// JAVASCRIPT D3.JS