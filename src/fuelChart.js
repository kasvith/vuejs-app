export const fuelChartData = {
    type: 'bar',
    data: {
      labels: ['1','2','3','4','5','6','7'],
      datasets: [
        { 
          label: 'Fuel Chart',
          
          data: [5000, 6000, 3000, 6000, 5500, 7000, 7500,],
          backgroundColor: [
            'rgb(27, 79, 114)',
            'rgb(33, 97, 140)',
            'rgb(40, 116, 166 )', 
            'rgb(46, 134, 193)',
            'rgb(52, 152, 219)',
            'rgb(93, 173, 226)',
            'rgb(133, 193, 233)',
          
          ]
        },
        
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      },

      scales: {
        xAxes: [{
                    gridLines: {
                        display:false
                    }
                }],
        yAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                      beginAtZero: true,
                      stepValue: 5,
                      max: 10000
                  }   
                }]
        }
    }
  }
  
  export default fuelChartData;