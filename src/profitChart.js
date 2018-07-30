export const profitChartData = {
    type: 'line',
    data: {
      labels: ['1','2','3','4','5','6','7'],
      datasets: [
        { // one line graph
          label: 'Daily profit',
          data: [20000, 21000, 15000, 30000, 0, 29000, 31000, 25000],
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
                    }   
                }]
        }
    }
  }
  
  export default profitChartData;