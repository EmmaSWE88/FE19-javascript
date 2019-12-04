// let todos = [];

// // const request = async() => {
// // const response = await fetch('http://jsonplaceholder.typicode.com/todos/1');
// // const json = await response.json();
// // console.log(json);

// // }
// // request();
// //gör inte som ovan utan kör .then i promise delen istället

// // fetch('http://jsonplaceholder.typicode.com/todos')
// // .then(res => res.json())
// // .then(data => {
// //     todos = data
// //     console.log(todos)
// // });
// //Hans ville göra såhär men det funkar inte heller
// //det lever inte utanför sin bit


// const todoData = async() => {
//     const response = await fetch(`http://jsonplaceholder.typicode.com/todos`)
//     const json = await response.json();
//     return json
// }

// const data = todoData();
// console.log(data);

// let results = []
// fetch('http://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .then(data => {
//     let ullistan = document.getElementById('results')

//     results = data
//     console.log(results)
    
//     for(let obj of data) {
//         ullistan.append(obj.title)
//     }
// })

$(function() {
    $('body').click(function() {
       
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {

            document.getElementById('results').innerHTML = data[0].title
            localStorage.setItem('results', data);

        })       
    })

    console.log(localStorage.getItem('results'));

})
