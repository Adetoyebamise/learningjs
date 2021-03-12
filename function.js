//Write a function that expects 3 arguments when called

// The first two arguments should be numbers
// The third argument should be a string
// If the value of the third argument is ‘multiply’
// Your function should return the multiplication of the first two arguments
// If the value of the third argument is ‘divide
// Your function should return the value of the first argument divided by the second argument
// If the value of the third argument is ‘sum’
// Your function should return the sum of the first two arguments

function workItOut(parameterFirst, parameterSecond, parameterThird)
    {
    if (parameterThird == 'multiply'){
      let result= parameterFirst*parameterSecond;
  return result
  } else if (parameterThird == 'divide'){
        result= parameterFirst/parameterSecond;
  return result
  }
    else if (parameterThird == 'sum'){
      result=parameterFirst+parameterSecond;
    return result
    } 
  }
console.log('Let',+ workItOut(35,5,'divide'));
workItOut(34,56,'sum');                           