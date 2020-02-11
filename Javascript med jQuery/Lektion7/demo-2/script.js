const form = document.querySelector('#demo-form');
const input = document.querySelector('#demo-input');
const results = document.querySelector('#demo-results');
let todos = [];

function addTodoItem(inputValue) {
    if(inputValue !== '') {
        todos.push(inputValue);
        localStorage.setItem('todos', todos);
        return;
    }
    alert('du måste ange ett värde');
}

function getTodos() {
    todos = []; //tömma så man inte skriver som 12 days of christmas hela tiden
    results.innerHTML = ''; //nollställer det grafiska gränssnittet

    if(localStorage.getItem('todos') !== null){ 
    todos = localStorage.getItem('todos').split(',');

    for(todo of todos) { 
        results.insertAdjacentHTML('afterbegin', `<p>${todo}</p>`);
        }
    }
    
} 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodoItem(input.value);
    form.reset();
    input.focus();
    
    getTodos();
})

getTodos()