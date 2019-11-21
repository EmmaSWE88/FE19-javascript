//Primitive Data Types
//String, Number, Symbol, Boolean, Undefined, Null
//Arrays,Functions, Objects = objet
//(typeof)

//Assigning to primitive value any changes
//are made directly to that specific value

//assigning non-primitive value to variable is done by reference
//so any of the changes will affect ALL the references

/* 
let number = 1;
let number2 = number;
number2 = 4;

console.log("the first value is " + number);
console.log("the second value is " + number2);

*/

//Non-primitive

/*
let person = {name: "bob"};
let person2 = person;
person2.name = "john";

console.log("the name of the first person is " + person.name);
console.log("the name of the second person is " + person2.name);

*/

//====================================================
// both undefined and null represent "no-value"

//undefined ----"javascript can not find value for this"

//null ----"programmer set the value" (sort of a placeholder)

/*
let number = 20 + null; // same as 20 + 0

console.log(number);

let number2 = 20 + undefined;

console.log(number2);
*/

//=================================================
// sting object
//=================================================

let human = "John Pepper";
human.length;

let length = human.length;

console.log(length);

console.log(human.toLocaleLowerCase());
console.log(human.toLocaleUpperCase());

console.log(human.charAt(5));
console.log(human.charAt(human.length-1));

console.log(human.indexOf("e"));

console.log(human.toLowerCase().startsWith("john"));
console.log(human.toLowerCase().endsWith("pepper"));

console.log(human.slice(0,5));
console.log(human.slice(-5));
console.log(human.includes("John"));





