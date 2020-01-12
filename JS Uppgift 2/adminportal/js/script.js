
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

//USER NAMES - NAME DISPLAY
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

//MESSAGES
fetch('http://inlupp-fa.azurewebsites.net/api/messages')
.then(res => res.json())
.then(data => {

    for(message of data) {

        messages.insertAdjacentHTML('beforeend', `
        <a class="dropdown-item preview-item">
        <div class="preview-thumbnail">
            <img src="https://via.placeholder.com/36x36" alt="image" class="profile-pic">
        </div>
        <div class="preview-item-content flex-grow message-box">
          <h6 class="preview-subject ellipsis font-weight-normal"> ${message.from}
          </h6>
          <p class="font-weight-light small-text text-muted mb-0">
            ${message.title}
          </p>
        </div>
      </a> 
        `); 

    }    
})

//NOTIFICATIONS
fetch('https://inlupp-fa.azurewebsites.net/api/notifications')
    .then(res => res.json())
    .then(data => {
      
      for(let i = 0; i < data.length ; i++){
        notifications.insertAdjacentHTML('beforeend', `
        <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-success">
                        <i class="mdi mdi-information mx-0"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject font-weight-normal">${data[i].title}</h6>
                      <p class="font-weight-light small-text mb-0 text-muted">
                      ${data[i].subtitle}
                      </p>
                    </div>
                  </a>
    `);
      }
    })

//TOTAL USERS
fetch('https://inlupp-fa.azurewebsites.net/api/total-users')
    .then(res => res.json())
    .then(userData => {
 
      document.querySelector('#totalUsers').innerHTML = userData.users.toLocaleString('en-US');
      document.querySelector('#totalUserPercent').innerHTML = userData.growth + '%';
 
    //from dashboard file 
    if ($("#users-chart").length) {
 
      var areaData = { //because two small arrays
        labels: userData.dataset.labels,
        datasets: [{
            data: userData.dataset.data,
            backgroundColor: [
              '#e0fff4'
            ],
            borderWidth: 2,
            borderColor: "#00c689",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartCanvas = $("#users-chart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
  })

// //TOTAL DOWNLOADS
// function getTotalOfflineDownloads(){

// const offlineProgress = document.getElementById('offlineProgress');
// const offlineTotalDownloads = document.getElementById('offlineTotalDownloads');

// fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
// .then(res => res.json())
// .then(data => {

//     for(message of data) {

//         offlineProgress.insertAdjacentHTML('beforeend', `${message.circleValue}`)
//         offlineTotalDownloads.insertAdjacentHTML('beforeend', `
//         <h2>${message.offlineAmount}</h2>
//         `); 



//     }    
//     //document.getElementById('offlineTotalDownloads').innerHTML = ${amount.offlineAmount};
//    console.log(data);
   
    
// }) //END of offline download fetchen
// } //END of offline function

// function getTotalSales(){ 
//     fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales`)
//     .then(res => res.json())
//     .then(data => {
        

        
//     }) 

// }
// let totalUsers = JSON.parse(localStorage.getItem('totalUsers'));


helloUserName();
// getNotificationMessages();
// getTotalOfflineDownloads();
// getTotalSales();
