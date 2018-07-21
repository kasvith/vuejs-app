export const profitChartData = {
    type: 'line',
    data: {
      labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
      datasets: [
        { // one line graph
          label: 'Daily profit',
          data: [20000, 21000, 15000, 30000, 0, 29000, 31000, 25000],
          backgroundColor: [
            'rgba(128,0,128,.4)', // Blue
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)'
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
      }
    }
  }
  
  export default profitChartData;