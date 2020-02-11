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
    .then(data => {
 
      totalUsers.innerText = data.users.toLocaleString('en-US');
      totalUserPercent.innerText = data.growth + '%';
 
    if ($("#users-chart").length) {
      var areaData = {
        labels: data.dataset.labels,
        datasets: [{
            data: data.dataset.data,
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


  //TOTAL PROJECTS
  
fetch('https://inlupp-fa.azurewebsites.net/api/total-projects')
.then(res => res.json())
.then(data => {

  totalProjects.innerText = data.projects.toLocaleString('en-US');
  totalProjectsPercent.innerText = data.growth + '%';

  if ($("#projects-chart").length) {
    var areaData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr","May"],
      datasets: [{
          data: [220, 120, 140, 135, 160, 65, 160, 135, 190,165, 120, 160, 140, 140, 130, 120,  150],
          backgroundColor: [
            '#e5f2ff'
          ],
          borderWidth: 2,
          borderColor: "#3da5f4",
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
          tension: .05
        },
        point: {
          radius: 0
        }
      }
    }
    var salesChartCanvas = $("#projects-chart").get(0).getContext("2d");
    var salesChart = new Chart(salesChartCanvas, {
      type: 'line',
      data: areaData,
      options: areaOptions
    });
  }

})



// //TOTAL DOWNLOADS
fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
  .then(res => res.json())
  .then(data => {
 

    document.getElementById('offlineTotalDownloads').innerText = data[0].offlineAmount.toLocaleString('en-US');

    //From dashboard file
    //Offline
    if ($('#offlineProgress').length) {
        var bar = new ProgressBar.Circle(offlineProgress, {
          color: '#000',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 6,
          trailWidth: 6,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: true,
            style : {
              color : "#fff",
              position: 'absolute',
              left: '40%',
              top: '50%'
            }
          },
          svgStyle: {
            width: '90%'
          },
          from: {
            color: '#f1536e',
            width: 6
          },
          to: {
            color: '#f1536e',
            width: 6
          },
          // Set default step function for all animate calls
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
    
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText(value);
            }
    
          }
        });
    
        bar.text.style.fontSize = '1rem';
        bar.animate(data[0].circleValue); // Number from 0.0 to 1.0
      }
  
      //Online
      document.getElementById('onlineTotalDownloads').innerText = data[1].onlineAmount.toLocaleString('en-US');

      if ($('#onlineProgress').length) {
      var bar = new ProgressBar.Circle(onlineProgress, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#fff",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#fda006',
          width: 6
        },
        to: {
          color: '#fda006',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(data[1].circleValue); // Number from 0.0 to 1.0
    }

  })

//TOTAL SALES CHART
fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart')
    .then(res => res.json())
    .then(data => {

        document.getElementById('revenueNumbers').innerText = data.revenue;
        document.getElementById('returnNumbers').innerText = data.returns;
        document.getElementById('querieNumbers').innerText = data.queries;
        document.getElementById('invoiceNumbers').innerText = data.invoices;

        if ($("#total-sales-chart").length) {
            var areaData = {
              labels: data.labels,
              datasets: [
                {
                  data: data.datasets[0].data,
                  backgroundColor: [
                    'rgba(61, 165, 244, .0)'
                  ],
                  borderColor: [
                    'rgb(61, 165, 244)'
                  ],
                  borderWidth: 2,
                  fill: 'origin',
                  label: "services"
                },
                {
                  data: data.datasets[1].data,
                  backgroundColor: [
                    'rgba(241, 83, 110, .0)'
                  ],
                  borderColor: [
                    'rgb(241, 83, 110)'
                  ],
                  borderWidth: 2,
                  fill: 'origin',
                  label: "services"
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
                  display: true,
                  ticks: {
                    display: true,
                    padding: 20,
                    fontColor:"#000",
                    fontSize: 14
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: '#eeeeee'
                  }
                }],
                yAxes: [{
                  display: true,
                  ticks: {
                    display: true,
                    autoSkip: false,
                    maxRotation: 0,
                    stepSize: 100,
                    fontColor: "#000",
                    fontSize: 14,
                    padding: 18,
                    stepSize: 100000,
                    callback: function(value) {
                      var ranges = [
                          { divider: 1e6, suffix: 'M' },
                          { divider: 1e3, suffix: 'k' }
                      ];
                      function formatNumber(n) {
                          for (var i = 0; i < ranges.length; i++) {
                            if (n >= ranges[i].divider) {
                                return (n / ranges[i].divider).toString() + ranges[i].suffix;
                            }
                          }
                          return n;
                      }
                      return formatNumber(value);
                    }
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
                  tension: .37
                },
                point: {
                  radius: 0
                }
              }
            }
            var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
            var revenueChart = new Chart(revenueChartCanvas, {
              type: 'line',
              data: areaData,
              options: areaOptions
            });
          }
      
      

    })


//TOTAL SALES
    fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales`)
    .then(res => res.json())
    .then(data => {

        totalSalesNumber.innerText = data.currency + data.amount;
     
      
    })
        
//TOTAL PURCHASES
fetch(`https://inlupp-fa.azurewebsites.net/api/total-purchases`)
.then(res => res.json())
.then(data => {

  totalPurchasesNumber.innerText = data.currency + data.amount;
 
  
})

//TOTAL ORDERS
fetch(`https://inlupp-fa.azurewebsites.net/api/total-orders`)
.then(res => res.json())
.then(data => {

  totalOrdersNumbers.innerText = data.currency + data.amount;
 
  
})

//TOTAL GROWTH
fetch(`https://inlupp-fa.azurewebsites.net/api/total-growth`)
.then(res => res.json())
.then(data => {

  totalGrowthNumber.innerText = data.currency + data.amount;
 
  
})

helloUserName();
