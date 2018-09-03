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
            label: 'Fuel Chart',
            //data:[5000, 6000, 3000, 6000, 5500, 7000, 7500],
            data:[],
            backgroundColor: [
            'rgb(27, 79, 114)',
            'rgb(33, 97, 140)',
            'rgb(40, 116, 166 )', 
            'rgb(46, 134, 193)',
            'rgb(52, 152, 219)',
            'rgb(93, 173, 226)',
            'rgb(133, 193, 233)',
          
          ]
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
        },

    }
},
created:function(){
  //this.datasets[0].data=[5000, 6000, 3000, 6000, 5500, 7000, 7500];
   const self=this;
    //self.datasets[0].data= [20000, 25000, 18000, 22000, 22000, 29000, 31000];
    axios.get(`http://localhost:5555/FuelPerWeek`,{
        params: {
        vehicleNum:self.$session.get('vehicleNum')  
          //vehicleNum:'19-0523'  
        }
        })
          .then(response=>{
          self.datasets[0].data=response.data;
           console.log(response.data);        
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

