var a = 5;
var b = "5";
var theNumbersMatch

// theNumbersMatch is ture because js evaluate b
if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log(theNumbersMatch);

// theNumbersMatch is false because === is abesolute strict equality
if ( a === b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log(theNumbersMatch);

// return true, !== abesolute strict not equal
console.log("1" !== 1);

// return false
console.log("1" != 1);


// not xor in js
var c = 10;
var xor;
// xor implementation
if((a==b && a==c) || (a!=b && a!=c)) {
  xor = false;
}
else {
  xor = true;
}

// ternary statement syntax
// condition ? true : false
a == b ? console.log("match"):console.log("no match");

// xor in ternary
var x = true, y = true;
console.log(x? !y: y);
