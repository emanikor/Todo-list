//objects


// 3 ways of creating object
var O = new Object();
new Number()
new Date()
//

var O = new Object();
O.firstName = 'cornelius';
O.lastName = 'emanikor';
O.isTechlead = 'true';
O.age = '22';
O.great =function(){
    console.log('hello');
}
console.log(json.stringify(O));

//obj 2
var O2={};
O['firstName'] = 'jordan';
var A ='lastName';
O2[A] ='hayashi';
// 'hayashi'


var O3 ={
    firstName:'jordan',
    lastName: 'hayashi',
   greet: function(){
        console.log('hi');
    }

}
//scope
do{
    int:x;
}while(1<20);

//variable lifetime
/*variable live from when they are decalared until
you can use a declared function in a different place */

// (Javascript Engine)
/*-before execting the code the engine reads the entire file and will throw a syntax err if one is found 
any function defination will be saved in memory
variable initialization will not be run ,but variable name will be declared */

//Global Object
//
//node.js

//primitives vs Object

//primitives vs Object
//primitives(cannot be change) are immutable

//Object are mutible and stored by reference

//pasing by refernce vs passing by value

//object

var obj1 ={};
var obj2 = obj1;
obj2.test = 'test';

console.log(JSON.stringify(obj1));
//change the object to a string
/*"test","test"; */

//Array within the object

obj2.array =[];
var x = obj2.arry;
x.push(1);
console.log(JSON.stringify(obj1));
//{"test", "test","arr".[1]}

//This
/*refers to an Object thats set at the creation of an new execution context*/
/*in the global exexution context, refers to global object */
//e.g
console.log(this);
{}
//
function whatIsThis(){
    console.log(this);
}
var person = {
    firstName:'jordan',
    lastName:'hayashi',
    whatIsThis:function(){
        console.log(this);
    } ;
    greet: function(){
        console.log('Hi',+this.firstName);
    }
};
whatIsThis(); //global object
person.whatIsThis();

//setting 'This' manualy

//bind() -overturn a new function
 //call() - call the function
 //apply() - call the function but multiple times.

 var student = {
        firstName:'john',
        lastName: 'Doe',
        
 };
 
 student.greet();

 person.greet.bind(student);

//'Hi' John 'doe'

/*First class function
function are treated the same way as objects
 -can be assign to variable ,array variable,object value
 -can be passed as argument to outer function 
 -can be returned from function

Allows for the creation of high order function
- either takes one or more function are arguments or returns as a fucntion
-map(),filter(),reduce()
*/
/*array.prototype.map()

The map()method creates as new array with the result of calling a provider function on every element in the array */

//Map()
var numbers =[1,5,10,15];
var roots = numbers.map(function(x){
    return x*2;
});
//roots is now [2,10,20,30]
//numbers is still[1,5,10,15]

//pass a function to any array

var x =[0.1,2,3]
>x[0.1,2,3]

>x.map
[function:map]
>function addOne(x){return x*1;}

addOne(1)
>x.map(addOne)

//[1,2,3,4]

//filters()
/*creates a new array with all elements thats pass the test implemented by the provided function */

function isBigEnough(value){
    return value >=10;

}
var filtered=[12,5,8,130,44].filter(isBigEnough);

//filtered is [12,130,44]

var x.filter{function(x)
    {return(x%2)===0}
}
//[0,2]

//Reduce
/*method applies a function against as accumulatare and each value of the array(from left-to-right)
 to reduce it to a single a value.*/

 var sum = [o,1,2,3].reduce{function(a,b){
      return a+b;
 },0;
 //sum is 6

x[0,1,2,3]
function accumulate(prevTotal + newValue){
    return = prevTotal + newValue;}
    x.reduce{accumulate.O}
};
//6

// Synchronous?Asyn? Single threaded
/*javascript is a single- Thread synchronoud language
a function that takes alongtime to run will cause a page to become unresponsive
javascript has function that act asynchronously*/

//asynchronous javascript
/*-execution stack
  -browser APIs
  -Function Queue
  Event loop-check the function Qeue at a milisecond*/

//execution stack

//browser API-behind the scenes
/*
-ajax(callback)-group a page
-setTimeOut()- run the code after sort of milisecond
-setInterval()-runs the code after every milisecond*/

/*Asynchronous functions
 -setTimeout()
 -xmlHttpRequest()-low level making network request,
 jquery.ajax()-making asynchronous cals without touchingxhr-,
 fetch()-every browser that allows you to make ajax calls withoutnloading jquery
 -Database calls*/

 //callbacks- pass a function =run one and return a value 
   /*
   -control flow with asynchronous calls
   -execute function one asynchronous calls
   - executives function one asynchronous calls return value
   */
  //for database query return instataneously
    //simulate fetching data from a db
    function getUserFromDatabase(callback){
        setTimeout()=callback({
        firstName:'conny',
        lastName:'emanikor'
    });
    1000;

    }
    //synchronously
//querry db for user,then greet the user
function greetUser(){
    var user = getUserSync();
    console.log('Hi',+ user.firstName);
}

//Asychronously
//querry db for user,then greet the user
function greet(){
    getUserFromDatabase(function()){
        console.log('Hi', ''+UserObject.firstName);
    }}
}
greetUser()
//'Hi' jordan

//promises
//alleviate "callback hell"
/*allows you to write code that assumes a value is returned within a success function 
only need a single error handler*/


//closer
/*function that refers to variable declared by parent function
possible because of lexical scoping

*/
function makeHelloFunction(){
    var message ='hello,world!';
    function logMessage(){
        console.log(message);
    }
    return logMessage;
}

var sayHello = makeHelloFunction();
sayHello();

function makeHelloFunctionArray(){
    var arr=[];
    for(var i=0; i<5; 1++){
        arr.push(function(){
            console.log(i)
        });
    }
    return arr
}
var functions = makeHelloFunctionArray()
functions[0]();

//5
function.for.each(x)=>x(i);
//5
//5
//5
//5
//5

