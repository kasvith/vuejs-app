<template>
  <v-container>
      <!-- toolbar start -->
      <app-toolbar></app-toolbar>
      <!-- toolbar end -->
 
      <v-container>
        <chartjs-line
            v-bind:labels="labels"
            v-bind:datasets="datasets"
            v-bind:option="option">
        </chartjs-line>
      </v-container>
  </v-container>
</template>

<script>
import Toolbar1 from '@/components/toolbar1'

export default {   

data(){
    return{
        labels:['1','2','3','4','5','6','7'],
        datasets:[
          {
            label: 'Daily profit',
            data:[15000, 19000, 15000, 16000, 16500, 22000, 23500],
            fill:false ,
            backgroundColor:
              'rgb(52, 152, 219)',
          }
        ],
        option: {
          responsive:true,
          title:{
            display:true,
            position:"bottom",
            text:"Days"
          },
          scales: {
            xAxes: [{
                        gridLines: {
                            display:false
                        },

                    }],
            yAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                          beginAtZero: true,
                          stepSize:5000,
                          max: 24000,
                          min:0
                      }   
                    }]
          }
        },

    }
},

components:{
      'app-toolbar':Toolbar1
    }
}
</script>

