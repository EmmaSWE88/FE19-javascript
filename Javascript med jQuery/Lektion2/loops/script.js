const nameArray = ['Hans','Isabelle','Gustav','Amanda','Ali','Sasha','Fredrik','Mali'];
const userArray = [
    { name: 'Hans', email: 'hans@hans.com', age: 35, status: true },
    { name: 'Isabelle', email: 'isabelle@domain.com', age: 28, status: true },
    { name: 'Gustav', email: 'gustav@domain.com', age: 31, status: false },
    { name: 'Amanda', email: 'amanda@domain.com', age: 42, status: true },
    { name: 'Ali', email: 'ali@domain.com', age: 23, status: true },
    { name: 'Sasha', email: 'sasha@domain.com', age: 44, status: true },
    { name: 'Fredrik', email: 'fredrik@domain.com', age: 53, status: true },
    { name: 'Mali', email: 'mali@domain.com', age: 42, status: false }
];

//lägg till i början
nameArray.unshift("Hejhej");

//lägg till i slutet
nameArray.push('dådå');

//ta bort i början
nameArray.shift();

//ta bort i slutet 
nameArray.pop();


//#############################################################
// LOOPAR (for, foreach, while)
//#############################################################

//FOR-LOOP
// i står för index eller integer

//FOR-loopen används när man vill loopa igenom nått ett specifikt antal ggr
for (let i = 0; i < nameArray.length; i++) {
//    console.log(`Index #${i} : ${nameArray[i]}`)
}

for (let i = 0; i < 1; i++) {
    //console.log(`Loop Nr #${i}`);
}

let users = ['Hans', 'Tommy', 'Anki'];
for (let i = 0; i < users.length; i++) {
    //console.log(`Loop Nr #${i} User: ${users[i]}`);
}

users.unshift('Anna');
for (let i = 0; i < users.length; i++) {
     //console.log(`Loop Nr #${i} User: ${users[i]}`);
}

users.push('Björn');
for (let i = 0; i < users.length; i++) {
      //console.log(`Loop Nr #${i} User: ${users[i]}`);
}

users.shift();
for (let i = 0; i < users.length; i++) {
     //console.log(`Loop Nr #${i} User: ${users[i]}`);
}

users.pop();
for (let i = 0; i < users.length; i++) {
     //console.log(`Loop Nr #${i} User: ${users[i]}`);
}

//Foreach - loopar genom ett helt objekt/array/lista

//Enklaste och nyaste versionen:

/* for(let name of nameArray) {
    console.log(name);
} */

for(let user of userArray) {
 //   console.log(user.name + ',' + user.age);
}

//Äldre foreach-loopen

nameArray.forEach(function(name) {
  //  console.log(name);
});

nameArray.forEach((name) => {
 //   console.log(name);
});

userArray.forEach((user) => {
 //   console.log(user.name + ',' + user.age);
});

// WHILE -LOOP
// loopar så länge ett visst tillstånd är uppnått eller inte uppnått
// (beroende på vad jag kollar)

 /* let i = 0;

while (i < 5) {
    i++;
    console.log(i);
} */

