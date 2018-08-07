<template>
  <v-container>
      <!-- toolbar start -->
      <app-toolbar></app-toolbar>
      <!-- toolbar end -->
 
      <v-container>
        <chartjs-bar
                   v-bind:labels="labels"
                   v-bind:datasets="datasets"
                   v-bind:option="option">
        </chartjs-bar>
      </v-container>
  </v-container>
</template>

<script>
import Toolbar1 from '@/components/toolbar1'
import axios from "axios"
export default {   

data(){
    return{
        labels:['1','2','3','4','5','6','7'],
        datasets:[
          {
            label: 'Daily income',
           // data:[20000, 25000, 18000, 22000, 22000, 29000, 31000],
            data:[],
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
                        barThickness : 40
                    }],
            yAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                          beginAtZero: true,
                          stepSize:5000,
                          max: 32000
                      }   
                    }]
          }
        },

    }
},

created(){
  const self=this;

 
 
  axios.get(`http://localhost:5555/calIncome`,{
        params: {
        //vehicleNum:self.$session.get('vehicleNum')  
           vehicleNum:'19-0523'  
        }
        })
          .then(response=>{
           self.datasets.data=response.data;
           console.log(response.data);        u
          })
          .catch(error=>{
            console.log("error")
          });   

},
components:{
      'app-toolbar':Toolbar1
    }
}
</script>

