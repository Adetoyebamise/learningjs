// Functions 
  function findFactorial(numberX) {
 
  if (numberX == 0) {
    return 1;
   } else {
    return (numberX - 1) * numberX;
   }
  } 

  console.log(findFactorial()); 

// Defining Functions
  const square = function (numberKie){
    return numberKie * numberKie
  }
  console.log(square(23))

// Arrow Function
 const power = (base, exponent) => {
   let result = 1 
   for ( let count = 0; count < exponent; count++){
     result *= base
   }
   return result
 }
 console.log(power(2, 7))

 // function call stacks
  function greet (who){
    console.log("Hello " + who )
  }
  greet ("Syhanye")

// Optional Argument
 function squareNumber (numberRio) {
   return numberRio * numberRio
 }
console.log (squareNumber(3 , "hedgefund" , "love life"))

// Closure
 function wrapValue (numberWei) {
   let local = numberWei
   return () => local
 }
 let wrap1 = wrapValue(1)
 let wrap2 = wrapValue(2)
 console.log(wrap1())
 console.log(wrap2())

// Using closures: functions that multiply by an arbitrary amount
 function multiplier (factor) {
   return number => number * factor
 }
 let twice = multiplier (2)
 console.log(twice(5))

// Recursion
 function showPower ( base, exponent) {
   if ( exponent == 0 ){
     return 1
   } else {
     return base * power (base, exponent - 1)
   } 
 }
 console.log (power( 2, 3 ))
// Recursive Example 
 function findSolution(target) {
   function find (current, history) {
     if (current == target ) {
       return history 
     } else if (current > target ) {
       return null 
     } else {
       return find (current + 5, `(${history} + 5)`) ||
              find (current * 3,`(${history} * 3)` )
     }
   }
   return find ( 1 , "1")
 }
 console.log(findSolution(34))

// Growing Functions
 function printFarmInventory (cows, chickens) {
   let cowString = String(cows);
   while (cowString.length < 3 ) {
     cowString = "0" + cowString;
   }
   console.log(`${cowString} Cows`)
   let chickenString = String (chickens)
   while (chickenString.length < 3 ) {
     chickenString = "0" + chickenString
   }
   console.log(`${chickenString} Chickens`)
 }
 printFarmInventory(7, 11)

// Function called for its side effect
 function printZeroPaddedWithLabel ( number, label) {
   let numberString = String(number);
   while (numberString.length < 3 ) {
     numberString = "0" + numberString
   }
   console.log(`${numberString} ${label}`)
  }
 function printFarmInventory(cows, chickens, pigs) {
   printZeroPaddedWithLabel (cows, "cows")
   printZeroPaddedWithLabel (chickens, " chickens")
   printZeroPaddedWithLabel (pigs, "Pigs")

 }
 printFarmIventory ( 7, 11, 3)

// Function called for it return value
 function zeroPad (number, width) {
   let string = string(number)
   while (string.length < width) {
     string = "0" + string 
   }
   return string 
 }
 function printFarmInventory (cows, chickens, pigs) {
   console.log(`${zeroPad (cows, 3)} Cows`)
   console.log(`${zeroPad (chickens, 3)} Chickens`)
   console.log(`${zeroPad (pigs, 3)} Pigs`)
 }

// function that displays minimum value
 function min(numberWiz, numberZiz) {
   if (numberWiz < numberZiz) 
    return numberWiz
    else return numberZiz

 }
 console.log(min(6, 4))

// Exercise on Recursion
 function isEven (numberTew) {
   if (numberTew == 0) return true
   else if (numberTew == 1) return false
   else if (numberTew < 0) return isEven (-numberTew)
   else return isEven ( numberTew - 2)
 }

 console.log( isEven (50))
 console.log( isEven(75))
 console.log(isEven(-1))

// Bean Counting
 function countChar(string, ch) {
   let counted = 0
   for (let i = 0; i < string.length; i++) {
     if (string[i] == ch) {
       counted += 1
     }
   }
   return counted 
 }

 function countBs (string) {
   return countChar(string, "B")
 }

 console.log(countBs("BBC"))
 console.log(countChar("kallakkuta"))

 