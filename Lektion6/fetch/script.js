console.log(0);

let todos = [];

console.log(1);

fetch('http://jsonplaceholder.typicode.com/todos')
//.then(res => console.log(res))
//.then(json => console.log(json))
//.then(data => console.log(data))
//.then(res => res.json())
.then(res => {

// console.log(res.headers.get('Content-Type'));

// for(let [key, value]of res.headers) {
//     console.log(`${key} : ${value}`);
    
// }

    if(res.status === 200) {
        console.log(2);
        return res.json()
    }

})
.then(data => {
    console.log(data)
    todos = data 
    console.log(3);
    

    for(object of data) {
        todos.push(object)
        //loopar igenom det och sätter in nya värdet längst bak i nya arrayen
    }
})
//.catch(error => console.log('Mitt felmeddelande: ' + error)) 
//om finns fel uppe så kan man försöka hitta och "fånga det"

.catch(error => {
    document.write('ett fel har uppstått')
    //skriver ut på själva sidan att det är fel
    todos = [];
})

console.log(4);

for(todo of todos) {
    console.log('done!');
    //den skriver inte ut något för fetch görs under tiden
    //det är async så det blir inte rätt ordning för det görs inte
    //i en top-down ordning. Måste ha en await funktion för att rätta till det.
}



