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

const name = 'john';
const age = 25;
const sentence = 'Hey it is ' + name + ' and he is ' + age + ' years old.';

const value = `Hey it's ${name} and he is ${age} years old.`;

console.log(value);
console.log(sentence);




