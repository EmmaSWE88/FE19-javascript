//(Repetition efter byte till Udemy)

//FUNCTIONS - declare, invoke, return,parameters/arguments,assign,expression;

// const pants = function add(num1,num2) {
//     let result = num1 + num2;
//     return result;
// }

// const first = pants(10,3);
// console.log(first);

// const second = pants(100,20);
// console.log(second);

// const third = pants(200,23);
// console.log(third);

//==========================================================
//Objects -key value pairs methods

// const person = {
//     name:'John',
//     lastName:'Peters',
//     age: 40,
//     education: false,
//     married: true,
//     siblings:['sister','brother'],
//     greeting: function(){
//         console.log("Hello my name is John!!");
//     }
// };
// const age = person.age;
// //person.name = 'Bob';

//     console.log(person.name);
//     console.log(person.siblings[0]);
//     person.greeting();
//     console.log(age);
    
    

//====================================================
//Conditional Statements
//> , < , >= , <= , == , === , != , !==
// else if and !

//====================================================
// Logical Operators
// || === or, && === and 
//!

// const name = 'peter';
// const age = 23;

// if(name === 'bob' || age === 24) {
//     console.log('Hello there user');
    
// }
// else {
//     console.log('wrong values'); 
// }

//====================================================
//Switch Statement
// dice values: 1 - 6

// let dice = 2;

// switch(dice){
//     case 1:
//         console.log('you got one');
//         break;
//     case 2: 
//         console.log('you got two');
//         break;
//     case 3: 
//         console.log('you got three');
//         break;
//     default: 
//     console.log('you did not roll the dice');
// }


// if(dice === 1) {
//     console.log('you got one');   
// }
// else if(dice === 2) {
//     console.log('you got two');   
// }
// else {
//     console.log('you did not roll the dice');  
// }

//====================================================
// LOOPS 
// NO autosave!! (T_T)

// while/ do while/ for loops

// let i;
// for(i=0; i<=10; i++) {
//     console.log('and the number is ' + i + '.');
// }

// for(let number = 8;number>=6;number--){
//     console.log('and the number is ' + number + '.');
// }

//String properties and methods

// let text = ' Peter Jordan';
// let result = text.length;

// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(1));
// console.log(text.charAt(text.length-1));
// console.log(text.indexOf('p'));
// console.log(text.indexOf('P'));
// console.log(text.indexOf('e'));
// console.log(text.toLowerCase().startsWith(' peter'));
// console.log(text.toLowerCase().endsWith(' jordan'));

// console.log(text.includes('zzz'));
// console.log(text.includes('eter'));

// console.log(text.slice(0,5));
// console.log(text.slice(-5));

// const person = {
//     name: 'peter', //property
//     greeting: function(){
//         //method
//         console.log('Hey I am Peter!!'); 
//     }
// };
// console.log(person);

// console.log(person.name)
// person.greeting();

//===============================================
//Template Literas - ES6+
//Backtick characters `` - above tab (left from one)
//Interpolation ${} - insert expression(value)

// const name = 'john';
// const age = 25;
// const sentence = 'Hey it is ' + name + ' and he is ' + age + ' years old. And here is some simple math ${}';

// const value = `Hey it's ${name} and he is ${age} years old.`;

// console.log(value);
// console.log(sentence);

//Array Properties and Methods

// let names = ['john', 'bob','barry','olga','ben', 12, 3];

// //length
// console.log(names.length);
// console.log(names[4]);
// console.log(names[names.length - 1]);

// //concat
// const lastNames = ['pepper','onion','banana'];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// //reverse
// console.log(allNames.reverse());

// //unshift
// allNames.unshift('suzy');
// console.log(allNames);

// //shift
// allNames.shift();
// // allNames.shift();
// console.log(allNames);

// //push
// allNames.push('suzy');
// console.log(allNames);

// //pop
// allNames.pop();
// console.log(allNames);

// //splice
// const specificNames = allNames.splice(2,4);
// console.log(specificNames);
// console.log(allNames);

//Arrays and For loop
// let names = ['anna', 'susy','bob'];
// let newArr = [];

// for(let i = 0; i<names.length; i++){
//     console.log(i);
//     console.log(names[i]);
//     newArr.push(names[i]);
    
// }
// console.log(names);
// console.log(newArr);

//Functions, return, if, arrays, for loop
// const names = ['anna','susy','bob'];

// function testing(arr){
//    // console.log(arr); 
//    let newArr = [];
//    for(let i = 0; i<arr.length; i++){
//        let newItem = `${arr[i]} jordan`
//        newArr.push(newItem)
// }
// if(newArr.length > 2){
//     return console.log(`here is your long array : ${newArr}`);
    
//     }
// console.log('this code will still be executed');
// }


// testing(names);
//=====================================================================
//Primitive Data Types:
//String, Number, Symbol, Boolean, Undefined, Null
//Everything else: Arrays,Functions,Objects = object
//(typeof)

//assigning a primitive data type value to a variable:
//any changes are made directly to that value, without affecting 
//the original value.

//assigning a non-primitieve data type value to a variable, is done by
//reference so any changes will affect ALL the references

// let number = 1;
// let number2 = number;
// number2 = 7;

// console.log(`the first value is ${number}`);
// console.log(`the second value is ${number2}`);

// let person = { name: 'bob' };
// let person2 = person;
// person2.name = 'susy';

// console.log(`the name of the first person ${person.name}`);
// console.log(`the name of the second person ${person2.name}`);

//============================================================
//Null and Undefined

//Both represent "no value"

//Undefined - "javascript can not find a value for this"

//variable without value
//missing function parameters
//missing object property

//Null -"developer sets value"

// let number = 20 + null; //20 + 0 
// console.log(number);

// let number2 = 20 + undefined; //
// console.log(number2);

//============================================
//Trythy vs Falsy
//Falsy:  "", '', ``, 0, -0, Nan, false, null,undefined

// const bool1 = false;
// const result = 2 < 5;
// console.log(typeof bool1);
// console.log(result);

// const text = 0;

// if(text){
//     console.log('runs if true');
// }
// else {
//     console.log('runs if false');
// }

//====================================
//Unary operator - typeof
// let text = 'some text';
// console.log(typeof text); //operand, only needs one operand, therefore unary
// //Binary operator - you need two operands, therefore binary
// let number = 3;
// let number2 = 2 + 5;

//Ternary operator
//condition ? (runs if true) : (runs if false)

// let value = 6 < 5;

// value ?  console.log('value is true') :  console.log('value is false'); //Ternary Operator

// if(value) {
//     console.log('value is true');
// }
// else {
//     console.log('value is false');  
// }

//=============================================================================
// GLOBAL SCOPE vs LOCAL SCOPE (Part 1)

//Any variable outside the code block is said to be in GLOBAL SCOPE
//A GLOBAL SCOPE can be accessed anywhere in the program
//PROBLEMS : name collisions, modify by MISTAKE

// let name = 'bob';
// name = 'peter';

// function calculate () {
//     //some other code ...
//     console.log(name);
//     //by mistake
//     name = 'orange';
//     function inner(){
//         name = 'this is some other value';
//         console.log(`this is from inner function ${name}`);
        
//     }
//     inner();
// }
// calculate();

// if(true){
//      //some other code ...
//      console.log(name);
//      //by mistake
//      name = 'pants';
// }

// console.log(`my name is ${name} and I'm awesome!`);

//=============================================================================
// GLOBAL SCOPE vs LOCAL SCOPE (Part 2)

//LOCAL SCOPE
//Can NOT be accessed from outside of the code blocks (curly braces)
//NOT VAR (const and let)
//USE KEYWORDS!

// let name = 'bob';

// function calculate (){
//     const name = 'susy';
//     const age = 30;
//     //variable without keyword
//     becomesGlobal = 'global value'
// }
// calculate();

// if (true) {
//     const name = 'anna';
// }
// console.log(name);
// console.log(becomesGlobal);


// //console.log(age);

// console.log(`my name is ${name} and I'm awesome`);

//======================================================
// Variable Lookup
// { } - code block

// const globalNumber = 5;

// function add(num1,num2) {
//     //const globalNumber = 20;
//     const result = num1 + num2 + globalNumber;
//     function multiply(){
//         const multiplyResult = globalNumber * result;
//         console.log(multiplyResult);
        
//     }
//     multiply();
//     return result;
// }

// console.log(add(2,4));

//JS checks locally first(withing code block) and if not found then checks global scope
