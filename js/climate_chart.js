//var ctx = document.getElementById('ClimateChart').getContext('2d');
var ctx = $('#ClimateChart')
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1960', '1970', '1980', '1990', '2000', '2010','2019'],
        datasets: [{
            label: 'CO2 Levels',
            data: [0.54, 1.06 , 1.68, 1.16, 1.61, 2.32, 2.46],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      title: {
            display: true,
            text: 'Comparing CO2 Levels Over Time',
            fontSize: 18,
            fontFamily: 'Helvetica Neue',
        },
 
      layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            }
        },
 
      legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'pink',
                fontSize: 14,
                fontFamily: 'Helvetica Neue',
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx2 = $('#myChart')
var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['1960', '1970', '1980', '1990', '2000', '2010','2019'],
        datasets: [{
            label: 'CO2 Levels',
            data: [0.54, 1.06 , 1.68, 1.16, 1.61, 2.32, 2.46],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },
    layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            }
        },
});