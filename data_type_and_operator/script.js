var negInteger = -3.14159265359;
var escQuote = "Quotes can also be \"escaped\".";
var singleQoute = 'This string can use "double quote" inside';
var theSunIsWarm = true;
var emptyInside = null;
var justAnotherVariable;

console.log(singleQoute);

// Try this in your console:
// console.log(typeof insertVariableName);

console.log(typeof emptyInside);
// return object

console.log(justAnotherVariable);
/* return undefined */



// js auto cast
// + is a string operator and arithmetic operator
var a = 10, b = "20";
// will print 1020 because js cast a to a string
console.log(a+b); // print 1020
// - * / are only arithmetic opertor, only operates on numbers
// js casts b to an integer
console.log(b/a); // print 2
console.log(a*b); // print 200
var str = "This is a string";
console.log(str-a); // print NaN which means not a numbers



// compound operator
var a = 1;
console.log(++a);
// increment a and print

a = 1
console.log(a++);
// print and increment
/* other compund operator includes -- += -= *= /=  */


// var devlare variables
var a, b; // declare variable a and b
/*  without using  var keyword to define variable,
    js will create one variable for you,
    and it is always a gloabl variable even if you declare it in a function */
// const keyword defines constant
const PI = 3.14;
// let keyword, block scope variable, smaller scope than var
//let example
function logScope(){
  var localVar = 10;
  if(localVar){
    let localVar ="I'm different.";
    console.log("nested localVar", localVar);
  }
  console.log("logScope localVar:", localVar)
}
logScope();
/*  if using two var instead of one var and one let
    the first localVar will be redefined as a string
    and two "I'm different" will be printed */
