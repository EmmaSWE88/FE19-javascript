const messages = document.getElementById('messages');

// fetch('http://inlupp-fa.azurewebsites.net/api/messages')
// .then(res => res.json())
// .then(data => {

//     for(message of data) {

//         messages.insertAdjacentHTML('beforeend', `
//             <a>
//                 <p>${message.from}</p>
//                 <p>${message.title}</p>
//             </a>
//         `); 

//     }


// })


function getFullName(firstname, lastname) {
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
    .then(res => res.text())
    .then(data => console.log(data))
}
function getTotalSales(){ //kör på den här varianten tex
    fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('totalSales', data)

        //här gör jag det jag vill göra (relaterat till uppgiften bland annat)
    }) 

}

let totalSales = JSON.parse(localStorage.getItem('totalSales'));
console.log(totalSales.currency);
console.log(totalSales.amount);

getFullName('Hans', 'ML')
getTotalSales()

