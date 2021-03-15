//Declare your variable
 const numberDoe = 5
 const numberZoe = 6
//Set your conditional statements. using the comparison operator

  if (numberDoe == numberZoe){         //set condition
   theNumbersMatch =true;              //codeblock
  } else{
   theNumbersMatch =false;             //codeblock
  }
 console.log("The Numbers Match is:" + theNumbersMatch);

/*Conditionals

 let theNumber = Number(alert("pick a number"));
 console.log ("Your number is the square root of " + theNumber*theNumber);
 let theNumber = Number( prompt ("Pick a number"));
  if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber*theNumber);
  }             
*/

//   I understood that using the if...else statement are appropriate for two different or unique cases.

// Looping control flow
 let numberFia = 0 ;
   while (numberFia <= 6) { 
    console.log ( numberFia);
    numberFia = numberFia + 2 ;
   }

// Another loop test 
  let result = 1
  let counter = 0

  while (counter < 10) {
    result = result * 2
    counter = counter + 1 
  }
  console.log(result)

// The do loop
  let yourName 
   do {
     yourName = prompt ("who are you")
   } while (!yourName)
  console.log(yourName)

// For loops
  for (let numberCie = 0;  numberCie <= 12;  numberCie = numberCie + 2) {
    console.log(numberCie);
  }

//The code that computes 2 to power 10 using for loop
  let result = 1
  for (let counter = 0 ; counter <= 10; counter = counter + 1) {
    output = result * 2
  }
  console.log(output)

//Breaking out of a loop 
  for (let current = 20; ; current = current + 1){
    if (current % 7 > 9) {
      console.log (current)
      break;
    }
  }

//looping a triangle
 for (let line = "#"; line.length < 8; line += "#")
  console.log(line)

//fizzbuzz
 for (let n = 1; n <= 100; n++){
   let output = "";
   if (n % 3 == 0) output += "Fizz"
   if (n % 5 == 0) output += "Buzz"
   console.log(output || n);
 }

//chessboard
 let size = 8
 let board = "";

 for (let y = 0; y < size; y++){
   for (let x = 0; x < size; x++){
     if ((x+y) % 2 == 0) {
       board += ""
     } else {
       board += "#"
     }
   }
   board += "\n"
 }

 console.log(board)

