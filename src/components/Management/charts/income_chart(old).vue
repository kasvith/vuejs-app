<template>
  <v-container>
      <!-- toolbar start -->
      <app-toolbar></app-toolbar>
      <!-- toolbar end -->

    <v-container>
      <div id="app">
        <canvas id="income-chart"></canvas>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import Chart from 'chart.js'
import incomeChartData from '@/incomeChart.js'
import Toolbar1 from '@/components/toolbar1'

export default {
    
  methods: {
  createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
  }
},

data(){
    return{
        incomeChartData: incomeChartData,
    }
},

mounted() {
  this.createChart('income-chart', this.incomeChartData);
},

components:{
      'app-toolbar':Toolbar1
    }

}
</script>

