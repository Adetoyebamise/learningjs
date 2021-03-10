This documents provides basic documentation about my learning progression on javascript.

Some notes that are worthy of taking.
##### Syntax


Literals: A value that is written in source code it can be a string, ,a boolean, object literals, array literals.
>5 (number)
>"Test" (string)
>["a", "b"] (array)
>{color: "red" shape:"rectangle" skintone:"black"}

Identifiers:Sequence of character, that can be used to identify a variable, funtion, an object. It can start with a letter, dollar sign, undersore, and can contain a digit.
>Test
>test
>_test
>$test
>test1

Comments
>// I am a single line comment
>/* I am a multi- line coment*/

#### Variables :
 variable is a value assigned to an identifier, so it can be accessed and used later in our code/program.
Variable must be defined before you can use them

Ways of declaring variable

1. const : defines a constant refererence to a value. This means the reference cannot be changed, you cannot reassign a new value to it.
>cont a = 0 ;
> a = 1; //This cannot work: it cannot be reassigned.

2. let : Using let we can assign a new value to it.
>let a = 0;
>a = 1; //This will work

3. var

How to work with const and let
i. const variables can be initiated at the declaration time.
>const a = 1;
ii. let values can be initiated later.
>let a
>a = 0;
iii. You can declare multiple variables at once in the same statement
>const a = 1, b = 2;
>let a = 43, b = 34;
iv. You cannot redeclare the same variable more than one time
>let a =1;
>let b = 2;  //this will output error

#### Types:
 Once you assign a value with some type to a variable, you can later reassign the variable to host a value of any other type, without any issue --have an understanding about this Toye.

Kinds of Types:

Primitive types:
* numbers
* strings
* booleans
* symbols
* booleans
* null
* underfined

Object Types:Any value that is not of a primitive type is an object.
Object types have properties and also methods that can act on those properties

#### Expression:
An expression is a single unit of javascript code that the JavaScript engine can evaluate, and return a value. Expressions vary in complexity

1. Primary Expression
2. Arithimetic Expression
3. String Expression
>'A' + 'string'
4. Logical Expression

#### Operators

Assignment Operator
Comparison Operator
Conditional Operator
Addition operator
Subtraction Operator
Division Operator
Remainder Operator
Multiplication Operator
Exponentiation Operator: Riasing the first operand to power second operand.
>2**8 //256

#### Precedence

Precedence answers the question what operations are excuted first  and which needs to wait.

#### Comparisons

Disequality Comparison Operators

1. >
2. <
3. <=
4. >=

Equality Operator
1. === //checks for equality
2. !== //checks for inequality

#### Conditionals

The conditional checks the expression you pass to it for true or false value
>if (condition){
  //do something
}
>if condition doSomething()

##### Else
Else provides a second part to the if statement; attaching a statement that needs to be executed if the condition is not met/false.
>if (condition){
  //do something
}else{
  //do something else
}
We can also have nested statements.
>if (condition){
  //do something
}else if{
  //do something else
}else{
  //fallback
}


#### Strings
Sequence of characters

Assigning a string

Defining the length of a string

Empty string

Joing strings using the + operator

Using the = operator to interpolate variable

Defining a string using template literal
Template literals are great  because they provide an easy way to interpolate variables and expression into strings.This is defined using backtick.
We do this by using the ${...} syntax : inside the $ sign you can add anything even expression.
>const var = 'test'
constant string = `something ${var}`
//something test 


#### Arrays
collection of items, Arrays in javascript are not a type on there own, arrays are objects.
Initializing an empty array using:
1. Array literal syntax 
2. Array built-in function

An array can hold any value, even value of different types:
>const a = [1, "options", ['a', 'b']]

Creating Muti-dimentionnal arrray
>const matrix = [
  ['1','2','3']
  ['12', '24', '6']
  ['3', '4', '24']
]
We can access any element of the array by referencing its index, which start from zero  
>matrix [0][0]

Initializing an array with elements and filling each elements with number
Array(12 //element).fil(number //say number 0)

Checking for numbers of elements in an array using the length property.
>const a = [5, 6, 7]
>a.length //3

##### How to add an item to an array
We can add element at the end of an array using the push() method:
>a.push(4)
Adding an element at the begginning of an array using the unshift ()method
>a.unshift[]












