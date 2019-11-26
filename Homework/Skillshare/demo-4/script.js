//Arrays and For Loop
//Har använts mycket förut så bra att veta om

//for loop (repetition)

// for(let i = 0; i<10;i++){
//     console.log('Your number is ' + i);  
// }

// let friends = ['bob','susy','john','eddy','olga'];

// for(let i = 0;i<friends.length;i++){
//     console.log(`Your friend number ${i} is ${friends[i]}`);  
// } 

// for(let i = friends.length-1; i>=0 ;i--) {
//     console.log(`Your friend number ${i+1} is ${friends[i]}`);   
// }

//FELET VAR FEL SORTS FNUTTAR! Ska vara `` INTE '' !!!

//Global Math Object

let number = 25; 
//Ändrade mellan exemplen

// let result = Math.floor(number);
// let result = Math.ceil(number);
// let result = Math.sqrt(number);
// let result = Math.PI;
// let result = Math.min(1,8,3,5,7);
// let result = Math.max(1,8,3,5,7);
//let result = Math.random();
//Random ger ett slumpat värde över noll men under 1! (i grunden)

//let result = Math.floor((Math.random()*10)+1);
//Ger ett slumpat värde mellan 1 och 10

//console.log(result);

//=======================================================
//Global Date OBJECT
//=======================================================

// const months = ['January', 'February' ,'March', 
// 'April', 'May', 'June', 'July', 'August','September',
// 'October','November', 'December'];

// const days = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday',
// 'Thursday', 'Friday', 'Saturday'];

// //let date = new Date();
// let date = new Date('1/12/2004');

// let month = date.getMonth();
// let day = date.getDay();
// //let seconds = date.getSeconds();

// date.setDate(25);
// date.setDate(2009);
// date.setMonth(4);

// console.log(`Month is : ${months[month]} and the date is : ${days[day]}`);
// console.log(date);


//====================================================
// todo(addltems) (bigger project over several videos)
//====================================================

//There are many methods
//MDN (Mozilla Developer Network)
//There is no point of memorizing!
//The best way to learn is to build using them

//====================================================

// let toDoList = [];

// function addItem(arr,item){
//     arr.push(item);
// }

// addItem(toDoList,"walk the dog");
// addItem(toDoList,"make coffee");


// console.log(toDoList);

// let toDoList = [];

// function addItem(arr){
//     let answer = prompt("what would you like to do today?");
//     arr.push(answer);
// }

// addItem(toDoList);
// addItem(toDoList);
// addItem(toDoList);


// console.log(toDoList);

//================================================
// todo (check item)
//================================================

let toDoList = [];

function addItem(arr){
    let answer = prompt("what would you like to do today?")
    let correct = answer.toLowerCase().trim();
    
    if(checkDuplicate(arr,correct)) {
        arr.push(correct);
    }
    else {
        alert('Item wont be added to the list.Item already exists, do not work so hard');
    }
    
}

function checkDuplicate(arr,item) {
    let exists = false;
    let index = arr.indexOf(item); //-1
    if(index!=-1){
        exists = false;
    }
    else {
        exists = true;
    }
    return exists;
}

addItem(toDoList);
addItem(toDoList);
addItem(toDoList);


console.log(toDoList);
