//Working with arthimetic operator + - * and /
var a = 56;
var b = 12;

var sum = a+b;
var subract = a-b;
var multiply  = a*b;
var divide  = a/b;

//Basic algebra rule --the BODMAS rule
var a =24;
var b = 48;
var c = 36;

var result = (a*b)+c ;

//performing shorthand math using +=, -=, *= and /=
var a = 5;
var a = a+4 ; //Longform version
a+=4;  //shorthand form.
//Performing math operation shorthand version using unary operator
a = a+ 1;
a++;
a = a-1;
a--;

//reversing the unary operator
++a; // incremental value of a is returned -add 1 to the value.

//Ternary OPerator: condition ? true statement, :false statement
if (a==b){
  console.log("Match")
}else{
  console.log("NoMatch")
}
