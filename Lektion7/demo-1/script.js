//Olika sätt att skriva samma sak på 
// const formById = document.getElementById('demoForm');
// const formByQS = document.querySelector('#demoForm');
// const formByJQ = $('#demoForm');
// formById.value;
// formByQS.value;
// formByJQ.val();

const form = document.querySelector('#demo-form');
const input1 = document.querySelector('#demo-input1');
const input2 = document.querySelector('#demo-input2');
const results = document.querySelector('#demo-results');

//Vi vill ha sakerna uppdelade i olika funktioner, inte i samma

function validateInput(inputValue) {
    if(inputvalue === '') {
        return true;
    }
    return false;
}

function sendRequest(message) {
    // let result = validateInput(input.value)
    // console.log(result);
    // if(validateInput(inputValue)) {
    //     console.error('Nått gick fel');

       console.log('sending information' + message);
       console.log('message sent');
       
        
        
    // }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // sendRequest(message);

    // console.log(e).target[0].type;
    
    // for(input of e.target[]) {
    //    const item = document.querySelector('input');
    //    console.log(item);   
    // }

    for(let i=0; i< e.target.length; i++) {
        const errors = []
        if(e.target[i].type === "text") {
            // validateInput(e.target[i].value);
            errors[i] = validateInput(e.tarvet[i].value); 
        }
        if(errors.includes(true)) {
            sendRequest();
        }
    }
})

