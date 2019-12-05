//==============Primitime Data Types In Javascript==============

//String
//let text = "This is a text";

//Number
//let value = 123;

//Boolean
//let value1 = true;
//let value2 = false;

//Null = object (this is a mistake, a bug that has been left in)
//let number23 = null;

//Undefined
//let name;

//Symbols(ES6) - will come later on in the course

/* 
console.log(typeof text);
console.log(typeof value);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof number23);
console.log(typeof name);
*/

//========================================================
//==============Data types in Javascript==============

//arrays, function, objects

/*
let fruits = ['apple', 'orange', 'banana'];
let code = function code (){
    console.log("Hello world");
}

let person = {
    name: "John",
    lastName :"Pepper"
}
console.log(typeof fruits);
console.log(typeof code);
console.log(typeof person);

*/

//==========================================
//======ARRAYS IN JAVASCRIPT=============
//Store multiple values, access them and use value
/*
let friend1 = "John";
let friend2 = "Peter";
let friend3 = "Bob";
let friend4 = "Will";

let friends = new Array("John","Peter", "Bob","Will");

let oldFriends = ["Peter",45,true,null,undefined];

oldFriends[0] = "Bob"

let bestFriend = oldFriends[0];

console.log(bestFriend);

*/

//==========================================
//======FUNCTIONS IN JAVASCRIPT=============

//Why use them? They are the best helpers

// Declaration, Invoke, Return, Parameters, Expression

//Declaration
/*
function hello(){
    console.log("Hello Stranger");
    console.log("Hello John");
    console.log("Hello Stranger");
    console.log("Hello Peter");
    console.log("Hello Stranger");
}
*/

//Invoke -obs! case sensitive!!

// hello();

//Return
/*
function add (){
    let sum = 10 + 3;
    return sum;
    
}

console.log(add());
*/

//Parameters

/*
function add (num1,num2){
    let sum = num1 * num2;
    return sum;
    
}

console.log(add(10,35));
console.log(add(4,60));

*/

//Expression

/*
function add (num1,num2){
    let sum = num1 * num2;
    return sum;
    
}

let result = add(12,56);

let result2 = function (num1,num2) {
    let sum = num1/num2;
    return sum;
}

console.log(result);
console.log(result2(24,3));

*/

//==========================================
//========OBJECTS IN JAVASCRIPT=============

//Obejcts in real life
//A car is an object, it has properties like a color 
//and you can drive it.

/*
let person = {
    name:"john",
    lastName: 'pepper',
    age:25,
    education:false,
    wife:true,
    siblings: ['sister','brother'],
    fullName:function () {
        console.log("And the full name of the person is : "+ person.name + " " 
        + person.lastName )
    }
}

let personName = person.name;
let personLastName = person['lastName'];

console.log(personName)
console.log(personLastName)

person.fullName();

*/

//===============================================
// IF ELSE STATEMENTS
//Conditional statements in Javascript
//Comparison operators
// >,<,>=,<=,==,===,!=,!==

//=====================
//IF ELSE STATEMENTS

/* if(2<1) {
    console.log("I am a math genious");
}


let num1 = 6;
let num2 = 8;

*/

/*
if (num1<=num2) {
    console.log("The first number was bigger than the second number or equal");
} 
else {
    console.log("The first number was smaller than the second number");
}

*/

/*
if(num1!=num2){
    console.log("numbers are not equal");
}
else {
    console.log("the numbers are equal");
}
*/
// == does not check if the data-types are the same, ONLY CHECKS VALUES
// === does check if the data-type match USE THIS ONE!

/* 
let person1 = "john";
let person2 = "bob";
let person = 'peter';

if(person === 'john'){
    console.log("this dude is john")
}
else if(person === 'bob') {
    console.log("this dude is bob")
}
else {
    console.log("I don't know this dude")
}

*/

//===========================================
//LOGICAL OPERATORS && and ||

/*
let day = "friday";
let money = 54;

if(day==="friday"&&money>50) {
    console.log("you are going out");
}

*/

//====================================
// BOOLEAN STATEMENTS

/*
let bool1 = true;
let bool2 = false;

console.log(typeof bool1);
console.log(typeof bool2);

let value = 2 <5;

console.log(typeof value);

let result = false;

if(result) {
    console.log("another boolean");
}

let number = 5;
if(number<6){
    console.log("another boolean");
}

*/

//TrythyFalsey values
//Falsey values:  "", '', ``,0, -0,NaN,false,null,undefined

// when a value is not a boolean but used in a condition
//it is turned into a true/false value
//

/*
let text = "just a text";
if(text){
    console.log("how is this possible?");
}

let falsy = 0;

if(falsy){
    console.log("runs only if true");
}
else {
    console.log("turns out to be false");
}
*/