// const sayHello = function(){
//     console.log('Hello');
// }

//Arrow Function
// const sayHello = () => {
//     console.log('Hello');
// }

//One Line function does not need braces
// const sayHello = () => console.log('Hello');

//One line returns
// const sayHello = () => 'Hello';

//Same as above
// const sayHello = function() {
//     return 'Hello';
// }

//Return object
// const sayHello = () => ({msg: 'Hello'});

//Single Param does not need parenthesis
//const sayHello = name => console.log(`Hello ${name}` );

//Om du har flera parametrar så kapsla in dem i en parantes
//multiple params need parenthesis
//const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}` );

//sayHello('Brad', 'Traversy');




const users = ['Nathan', 'John', 'William'];

//Long version
// const nameLengths = users.map(function(name){
//     return name.length;
// });
 
//Shorter version
// const nameLengths = users.map((name) => {
//     return name.length;
// });
 
//Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);
