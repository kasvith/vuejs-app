export const fuelChartData = {
    type: 'pie',
    data: {
      labels: ['1','2','3','4','5','6','7'],
      datasets: [
        { // one line graph
          label: 'fuel',
          data: [20000, 21000, 15000, 30000, 0, 29000, 31000,],
          backgroundColor: [
            'rgb(27, 79, 114)',
            'rgb(33, 97, 140)',
            'rgb(40, 116, 166 )', // Blue
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
                    }   
                }]
        }
    }
  }
  
  export default fuelChartData;