
// const distributionUrl = 'https://inlupp-fa.azurewebsites.net/api/distribution'
// const downloadsUrl = 'https://inlupp-fa.azurewebsites.net/api/downloads'
// const messagesUrl = 'https://inlupp-fa.azurewebsites.net/api/messages'
// const notificationsUrl = 'https://inlupp-fa.azurewebsites.net/api/notifications'
// const openInvoicesUrl = 'https://inlupp-fa.azurewebsites.net/api/open-invoices'
// const salesReportUrl = 'https://inlupp-fa.azurewebsites.net/api/sales-report'
// const ticketsUrl = 'https://inlupp-fa.azurewebsites.net/api/tickets'
// const totalGrowthUrl = 'https://inlupp-fa.azurewebsites.net/api/total-growth'
// const totalOrdersUrl = 'https://inlupp-fa.azurewebsites.net/api/total-orders'
// const totalProjectsUrl = 'https://inlupp-fa.azurewebsites.net/api/total-projects'
// const totalPurchasesUrl = 'https://inlupp-fa.azurewebsites.net/api/total-purchases'
// const totalSalesUrl = 'https://inlupp-fa.azurewebsites.net/api/total-sales'
// const totalSalesChartUrl = 'https://inlupp-fa.azurewebsites.net/api/total-sales-chart'
// const totalUsersUrl = 'https://inlupp-fa.azurewebsites.net/api/total-users'
// const updatesUrl = 'https://inlupp-fa.azurewebsites.net/api/updates'
// const usersUrl = 'https://inlupp-fa.azurewebsites.net/api/users'


/* ======================================================================= */
/* USERS START */ 

// let userProfileName = document.getElementById('userProfileName');
// let welcomeUser = document.getElementById('welcomeUser');

// function getFullName(firstname, lastname) {
//     fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
//     .then(res => res.text())
//     .then(data => {
//         // Check browser support
//     if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("firstname", "Emma");
//     localStorage.setItem("lastname", "Smith");
//     // Retrieve
//     document.getElementById("userProfileName").innerHTML = localStorage.getItem("lastname");
//     document.getElementById("userProfileName").innerHTML = localStorage.getItem("firstname");
//   } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//   }
// })

// getFullName('Hans', 'ML');


// } //END function getFullName

// /* ======================================================================= */
// /* MESSAGES START */ 

// const messages = document.getElementById('messageOne');

// fetch('https://inlupp-fa.azurewebsites.net/api/messages')
// .then(res => res.json())
// .then(data => {

//     for(message of data) {

//         messages.insertAdjacentHTML('afterbegin', `
//             <a>
//                 <p>The meeting is NOT cancelled.</p>
//                 <p>${message.title}</p>
//             </a>
//         `); 

//     }


// })
function helloUserName() {
    let firstname = 'Emma'
    let lastname = 'Norling'

    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
    .then((res) => res.text())
    .then(data => {
        document.getElementById('welcomeUser').innerText = data;
        document.getElementById('userProfileName').innerText = data;
    });

}


// function getTotalSales(){ //kör på den här varianten tex
//     fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         localStorage.setItem('totalSales', data)

//         //här gör jag det jag vill göra (relaterat till uppgiften bland annat)
//     }) 

// }

// let totalSales = JSON.parse(localStorage.getItem('totalSales'));
// console.log(totalSales.currency);
// console.log(totalSales.amount);

helloUserName();

