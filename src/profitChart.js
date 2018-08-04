export const profitChartData = {
    type: 'line',
    data: {
      labels: ['1','2','3','4','5','6','7'],
      datasets: [
        { // one line graph
          label: 'Daily profit',
          
          data: [15000, 19000, 15000, 16000, 16500, 22000, 23500],
          fill:false ,
          backgroundColor: [
            'rgb(48, 48, 241)', // Blue           
          ],
          
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
                      max: 24000
                  }   
                }]
        }
    }
  }
  
  export default profitChartData;