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
> a = 1; //This cannot work: it cannot be reassigned. Dont use one letter for variable name. Write a variable name that represent the value of that variable. Variable name should reprsent the value of the variable.

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

Dyanmic typing - //JavaScript
Static typing - //Rust, 
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
Adding an element at the beginning of an array using the unshift ()method
>a.unshift()

##### How to remove and object from an array
We can remove an item from an array using the pop()method:
>a.pop()

We can remove an item from the beginning of an array using the shift() method:
>a.shift()

##### How to join two or more  arrays
We can join multiple arrays by using concat():
>const numberX = ['1','2']
>const numberY = ['54', '65']
>const numberZ  = concatnumberX(numberY)

You can also use the spread operator (...) 
>const numberX = ['1','2']
>const numberY = ['54', '65']
>const numberZ = [...numberX, ...numberY]

##### How to find a specific item on the array
We can use the find() method of an array:
>nunmberX.find ((element, index, array)=>{
>  //return true or false    
>})

Return the first item that returns true. Returns undefined if the element is not found.

  - A commonly used  syntax is:
  >numberX.find(x => numberX.id === my_id)
  The above line will return he first element in the array that has id === my_id

  findIndex() works similarly to find(), but returns the index of the first item that returns true, if not found , it returns undefined:

  numberX.findIndex((element,index, array)=>{
    //return true or false
  })

  Another method is includes():
  numberX.includes(value)

  Returns true if a contains value
  numberX.includes(values, i)

  Returns true if numberX contains value after the position i.

  #### Loops

  - one of the main control structures of JavaScript
  - With a loop we can automate  and repeat indefinitely a block of code, or how many times we want it to run
  - Ways to iterate through loop are:
    * while loops 
    * for loops 
    * for...of loops

  ##### while 
    - simplest loop structure that JavaScript provides
    - add a condition after the while keyword  
    - provide a block that is run until the condition evaluates to true.
    >const list = ['soccer', 'Basketball', 'javelin']
    >  let i = 0
    >  while (i < list.length){
    >    console.log(list [i])
    >    console.log(i)
    >    i = i + 1
    >  }
    - You can interrupt  a while loop using the break keyword;
    >while(true){
    > if (somethingIsTrue) break
    >}
    - We can jump to the next iteration using continue :
    >while (true) {
    > if (somethingIsTrue) continue
    > // do something else
    }

  ##### do...while loop
    * condition is evaluated after the code block is executed
    * The block is always executed at least once
    Example
    >const list = ['a', 'b', 'c']
    >let i = 0
    >do{
      console.log(list[i])  //value
      console.log(i) index
      i = i+1
    } while (i < list.length)

    ##### For
    * Second very important looping structure in JavaScript is the for loop
    * We pass three instruction 
      - the initialization
      - the condition
      - the increment part
    Example;
    >const list = ['Drake', 'Cheque', 'Kiwanuka', 'Jcole']
    >for (let i = 0; i< list.length; i++){
      console.log(list[i]) //value
      console.log(i) //index
    }
  Just like while loop we can interrupt a for loop using break and we can fast forward to the next iteration of a for loop using continue

  ##### for...of
   - introduced in 2015
   - simplified version of  the for loop:

   >const list = ['chelsea', 'brighton Hove and Albion', 'Real Madrid']
   for (const value of list ){
     console.log(value)//value 
   }

  #### Functions
    Function is a block of code, self contained

  _function_ _declaration_
  >function getData (){
    //do something
  }
  A function can be run anytime by invoking it, like 
  >getData()
  A function can have one or more arguments:
  >function getData(){
    //do something
  }
  function getData(color){
    //do something
  }
  function getData(nationality, age){
    //do something
  }

  When we want to pass a parameter we invoke the function passing parameter:
  >function getData(artist, album){
  //do something 
  }
  >getData('Kiwanuka' 'love and Hate')
  >getData ('Adele') //album inside this content is undefined
  Checking if a variables is defined using this conditional
  >function getData(){
    //do something
    if (typeof age !== 'undefined'){
      //do something
    }
  }
typeof is a unary operator that allows use to check the type of a variable.
Another way of checking is this:
  >function getData ('Artist', 'Album'){
    //do something
    if(album){
      //do something
    }
  }
  Having default value for parameters incase  they are not passed 
  >function getData(Artist = 'Adele', Album = 18){
    //do something
  }

You can pass any value a a parameter: numbers,strings,booleans,arrays, objects and also functions
Afunction have a return value. By default a function returns undefined,unless you add a return keyword with a value.
  >function getData(){
    //do something
    return hi
  }
We can assign this return value to a variable when we invoke the function
  >function getData(){
    //do something
    return 'vibes'
  }
  let result = getData()
 result now holds a string with the vibes value

Returning Multiple Values: We can return an object, or an array

  function getData(){
    return ['washere' 76]

  }
  let [slangs, age]= getData()

Functions can be defined inside functions
  >const getData = () => {
    const doSomething = () => {}
    doSomething ()
    return 'creatives'
  }
The nested function cannot be called from the outside  of the enclosing function.
We can return a function from a function 
#### Arrow Function
Arrow function allows to write functions with a shorter syntax, from;
  >function getData(){
    //code block
  }
  to 
  >() => {
    //code block
  }
Arrow functions are anonymous, we must assign them to a variable
Similarly assigning variable to a regular function, we can also assign variable to arrow functions.
  >let getData = () => {
    //code block
  }
  getData()
If the functionbody contains just  asingle statement, you can omit the parentheses and write all on a single line
  >const getData = () => console.log('string')

Parameter are passe in the parentheses
  >const getData = (paramOne paramTwo) =>
  console.log(paramOne, paramTwo)

  If we have one and just one parameter, we can omit the paerntheses completely:
    >const getData = parameter =>
     console.log(parameter)
Arrow function allows us to have an implicit return: values are returned wthout having to use the return keyword.
It works when there is a on-line statement in the function body:
 >const getData = () => 'test'
 getData() //'test'

Like with regular functions we can have default parameters:
  >const getData = ( color = 'black' , age = 54) => {
    //do something
  }

The above arrow function can only return one value.
Arrow functions can contain another arrow function.

#### Objects
Any value that is not of the primitive types is an objects
  >const car = {

  }

The above is the object literal syntax .
We can also use the new object syntax :
  >const car = new Object()

Another syntax is to use  Object.create()
  >const car = Object.create 

We can initialize a function using the new keyword before a function with a capital letter. The function serves as a _constructor_ for that object. In there, we can initialize the argument we receive as parameters, to setup the initial state of the object:
  >function Car (brand, model){
    this.brand = brand
    this.model = model
  }

Then we initialize a new object using 
>const myCar = new Car ('Mercedes' 'vintage')
myCar.brand  //'Ford'
myCar.model //'vintage'

Object are always passed by reference
  >const car = {
    color: 'blue'
  }
  const anotherCar = car 
  anotherCar.color ='gray'
  car.color //'yellow'

N.B: It is important to know how they work, ever arrays or functions  are under the hood, objects.
#### Object Properties
Object have properties, which are composed by a label associated with a value.

The value of a property can be of any type, it can be an array, a function, an objects ; as objects can nest other objects.

  Recall Object literal syntax:
  >const car = {

  }
  We can define a color property in this way:
  >const car = {
    color: 'blue'
  }
Here we have a car object with a property named color, with value 'blue' 
Label can be any string, but beware special characters like spaces hyphen...
We can retreive the  the value of a property using two different syntaxes
The first is *dot notation*:
  >car.color //'blue'

The second is to use square bracket:
  >car['the color'] //'blue'

If you access an unexisting property, you'll get  the undefined value:
  >car.brand  //undefined

Object can have nested objects as properties:
  >const car = {
    brand: {
      name: 'Ford'
    },
    color: 'blue'
  }

  Accessing branch name using 
  >car.brand.name
  OR
  >car['brand']['name']

  We can set the value of a property when we define the object.

  We can also delete a property from this objet using :
  delete car.brand

#### Object Methods
Functions can be assigned to a function property, and in this case they are called Methods

For Example, the start property has a function assigned, and we can invoke it by using the dot syntax we used for properties, with the parentheses at the end.

>const car = {
  brand : 'Renault'
  model : 'Duster'
  start: function(){
    console.log('started')
  }
}
car.start()

Inside a method defined using a function() {} syntax we have access to the object instance by referencing this 

In the following example, we have access to the brand and model properties values using this.brand and this.model 

>const car = {
  brand : 'Mercedes'
  model : 'gclass'
  start: function (){
    console.log(`started
      ${this.brand} ${this.model})
  }
}

car.start()

Note that we dont have access to this if we use an arrow function, this is because arrow functions are not bound to the objects.


Methods can accept parameters, like regular functions:
>const car = {
  brand : 'Mercedes'
  Model : 'Gwagon'
  goTo: function (destination){
    console.log(`Going to ${destination}`)
  }
}
car.goTo('Rome')

#### Classes
They are a way to define a common pattern for multiple object.
Let take a room object:
>const room = {
  name : 'Upperroom'

}
Note that we can create an object using capital P, it is a convention.

>class Room {
  name 
}
We can initiate a named object like this 

>const Upperroom = new Person()

Upperroom is called an instance of the Room class

We can set the value of the name property 
Upperrom.name = 'Upperroom'

We can also access it using 
>Upperroom.name  //just like we did with obect properties

Classes can hold properties, like name and methods
Methods are defined in this way:

>class Room{
> hello(){

>   return 'Welcome to the upperroom' 

> }

> }

We can invoke methods on an instance of class:
>class person {
  hello() {
    return 'Welcome to the Upperroom'
  }
}
const warroom = new Room()
 warroom.hello()

There is a special method called constructor() we can use to initialize the class properties when we create  a new object instance

It works like this :
  >class Room{

  >  constructor(name){

  >    this.name = name 

  >  }

  >  hello(){

  >    return  'Welcome ' + this.name +'.'

  >  }

  > }

How do we use this to access the object instance .
 - We instantiate a new object from the class, passing a string, and when we call hello, we'll get a personalized message 
  >const Upperroom = new Room ('Upperroom')

  >Upperroom.hello () //'hello, Welcome to the Upperroom

  When the object is initialized, the constructor method is called, with any parameters passed. 

  Normally methods are defined on the object instance, not on the class.
  We can define  a method as static to allow it to be executed on the class instead:

  >class Room {

  >  static genericHello(){

  >   return 'Hello'

  > }

  > }

  >  Room.genericHello() //Hello


#### Inheritance

A class can extend another class, and objects initialized using that class inherit all the methods of both classes.

Suppose we have a class Room:
>class Room {
> hello(){
>    return 'Welcome to our Room'

> }

> }
We can define a new class programmer that extends Person
>class Programmer extends Person {

>}

Now if we instantiate a new object with class programmer, it has access to the hello() method:
>const dolapo = new Programmer()
 dolapo.hello()

 Inside a child class, you can reference the parent class calling super()
 >class Programmer extends Person{

 >  hello() {

 >   return super.hello() +

 >     'I am a programmer'

 >  }

 > }

>const dolapo = new Programmer()

>dolapo.hello()


##### Asyncronous Programming and Callbacks
Most of the time JavaScript is ran synchronously. This means that a line of code is executed, then the next one is executed and so on.

However, there are times you cnnot just wait for a line of code to execute, JavaScript solves this problem using callbacks.
One of the simplest examples of how to use callbacks is timers. Timers are not part of JavaScript, but they are provided by the browser, and Node.js.

The setTimeout() function accepts 2 arguments: a function, and a number. The number is the milliseconds that must pass before the function is ran
**Example**

> setTimeout(() =>{

>  //runs after 2 seconds 

> console.log('inside the function')

> }, 2000)

The function containing the console.log ('inside the function') line will be executed after 2 seconds.
If you add a console.log('before') prior to the function, and console.log('after') after it:
>console.log('before')

>setTimeout(()=> {

> //runs in 2 seconds

> console.log ('inside the function')

> }, 2000)

> console.log('after')

Happenings in the console
>before
>after
>inside the function

The callback function is called back asynchronously

We can define a function that accepts a callback parameter, which is a function
When the code is ready to invoke the callback, we invoke it passing the result:

> const doSomething = callback => {

>  //do things

> //do things

> const result = /*..*/

>  callback(result)

> }

Code Using this function would use it like this :
>doSomething(result =>{

>  console.log(result)

> })

#### Promises
Promises are an alternative way to deal with asyncronous code
The main problem with the asynchronous ... is that if we need to use the result of the function in the rest of the code, all our code must be nested inside the callback, and if we have to do 2-3 callbacks we enter in what is called  "callback hell" with many levels ofthe functions indented into our functions :

>doSomething(result =>{

>    doSomethingElse(anotherResult =>{

>     doSomethingElseAgain(yetAnotherResult => {

>        console.log(result)

>     })

>   })

> })
 Promises are one way to deal with this

 Instead of doing :
  >doSomething(result => {

  >  console.log(result)

  >})
  We call a promise-based in this way:
  >doSomething()

  >  .then(result => {

  >    console.log(result)

  > })
We first call the function, then we have a then() method that is called whenthe function ends. Indentation does not matter but we can use them as style for clarity.

It's common to catch error using the the catch() method
doSomething()
  .then(result =>{
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })

Now to be able to use this syntax, the doSomething() function implementation must be a little bit special. It must uses a promise API

Instead of declaring it as a normal function:

  >const doSomething = () => {

  }
  We can declare it as a promise object
  >const doSomething = new Promise()

  and we pass a function in the promise constructor:
  >const doSomthing = new Promise(()=>{

  > })
The functionre receives 2 parameters. The first is a function we call to resolve the promise, the second  afunction we call to reject thepromise 
>const doSomething = newPromise (

>  (resolve, reject)=> {

> })
Resolving a promise means complete it successfully (which result in calling the then() method in who uses it)
Rejecting a Promise means ending it with an error(which results in calling the catch()method in who uses it)
>const doSomething = new Promise
.
.
.
#### Async and Await
Async functions are a higher level abstraction over promises
An async function returns a promise.
#### Variable Scope
Using:
  - const
  - let
  - var

  In JavaScript we have a global scope, block scope and function scope 

  Scope is the set of variable that is visible  to the part of the program
#### Reference

  1. JavaScript Beginner HandBook



















