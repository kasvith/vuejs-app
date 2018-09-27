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
import axios from "axios"
export default {   

data(){
    return{
        labels:['1','2','3','4','5','6','7'],
        datasets:[
          {
            label: 'Daily profit',
            //data:[15000, 19000, 15000, 16000, 16500, 22000, 23500],
            data:[],
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

created:function(){
  //this.datasets[0].data=[15000, 19000, 15000, 16000, 16500, 22000, 23500];
  const self=this;
    //self.datasets[0].data= [20000, 25000, 18000, 22000, 22000, 29000, 31000];
    axios.get(`http://173.82.219.12:5555/calProfit`,{
        params: {
        vehicleNum:self.$session.get('vehicleNum')  
        //vehicleNum:'19-0523'  
        }
        })
          .then(function(response){
          self.datasets[0].data=response.data.data;
           for(var i=0;i<7;i++)
          {
            self.labels[i]=response.data.label[i];
          }
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

