<template>
  <v-container>
      <!-- toolbar start -->
      <app-toolbar></app-toolbar>
      <!-- toolbar end -->

     

      <v-container>
      <div id="app">
        <canvas id="fuel-chart"></canvas>
      </div>
      </v-container>
  </v-container>
</template>

<script>
import Chart from 'chart.js'
import fuelChartData from '@/fuelChart.js'
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
        fuelChartData: fuelChartData,
    }
},

mounted() {
  this.createChart('fuel-chart', this.fuelChartData);
},

components:{
      'app-toolbar':Toolbar1
    }
}
</script>

