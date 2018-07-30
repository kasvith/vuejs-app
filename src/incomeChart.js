export const incomeChartData = {
  type: 'bar',
  data: {
    labels: ['1','2','3','4','5','6','7'],
    datasets: [
      { // one line graph
        label: 'Daily Income',
        data: [20000, 21000, 15000, 30000, 0, 29000, 31000],
        backgroundColor:
          'rgb(52, 152, 219)',        
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
                  },
                  barThickness : 30
              }],
      yAxes: [{
                  gridLines: {
                      display:false
                  }   
              }]
      }
  }
}

export default incomeChartData;