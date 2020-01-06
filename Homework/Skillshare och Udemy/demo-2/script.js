//Unary operator - needs one operand

// let text = "string";

// console.log(typeof text); //Operand

//Binary operator - needs two opernad

//let number = 3;


//Ternary operator

// condition ? (runs if true) : (runs if false);

//let result = 10;

//result % 2 === 0 ? console.log("even number") : console.log("odd number");

//let expression = result%2;

/*
function response (text){
    console.log(text + " number");
}

expression === 0 ? response("even") : response("odd");
*/

//========================================================
//=========SWITCH STATEMENT==============================

/* 

Not good to use in some cases 

let dice = 1;

if (dice === 1) {
    console.log("You got one");
}
else if(dice === 2){
    console.log("You got two");
}

else {
    console.log("You did not roll the dice");
}

*/

/*

let dice = 0;

switch(dice){
    case 1:
        console.log("You got one");
        break; //Otherwise it would continue with the other cases
    case 2:
         console.log("You got two");
         break;
    default: 
        console.log("You did not roll the dice");
        break;
}

*/

//=============================================
// =================== Execise ================

/* 

function displayDayOfTheWeek(day){
    switch(day){
        case 1: 
        console.log("Today is Monday");
        break;
        case 2: 
        console.log("Today is Tuesday");
        break;
        case 3: 
        console.log("Today is Wednesday");
        break;
        case 4: 
        console.log("Today is Thursday");
        break;
        case 5: 
        console.log("Today is Friday");
        break;
        case 6: 
        console.log("Today is Saturday");
        break;
        case 7: 
        console.log("Today is Sunday");
        break;
        default: 
        console.log("INVALID DAY!!!!!");
    }
}

displayDayOfTheWeek(4);
displayDayOfTheWeek(3);
displayDayOfTheWeek(2);
displayDayOfTheWeek(1);
displayDayOfTheWeek(6);
displayDayOfTheWeek(5);
displayDayOfTheWeek(7);
displayDayOfTheWeek(0);

*/

//===================================================
// LOOPS: WHILE - DO WHILE - FOR 
//===================================================

// JOHN SMILGA ALSO SAID TO UNCHECK AUTO SAVE!

//repeatedly run a block of code while certain condition is true

//WHILE LOOP
/*
let amount = 10;

while(amount>0){
    console.log("I have " + amount + " dollars and I'm going to the mall");
    amount--; //prevent an infinite loop!
}
*/

//=========================================
// DO WHILE
//=========================================

/*
let money = 0;

do{
    console.log("You have " + money + " and you are going to the mall.");
    money++;
}while(money<10)

*/

//=========================================
// FOR
//=========================================

let i;

/*
for(i=0; i<=10; i++){
    console.log("And the number is " + i);
}
*/

for(let number = 11;  number>=0; number--){
    console.log("And the number is " + number);
}