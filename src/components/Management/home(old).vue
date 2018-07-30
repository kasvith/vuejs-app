<template>
 
 <v-container fluid>
  <!-- toolbar start -->
  <app-toolbar></app-toolbar>

  <!-- toolbar end -->

<!--extra small devices-->
    <v-container fluid grid-list-lg>
    <v-layout class="hidden-sm-and-up">
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <v-select            
                  :items="vehi_numbers"
                  solo
                  label="Vehicle Number"
                  class=""
                  flat
                >
                </v-select>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="title">
            Speed:{{speed}}
            </v-card-text>          
            <v-card-text class="title">
              No. of passengers: {{num_seats}}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
<!--extra small devices-->

    <v-layout class="hidden-xs-only mt-3">
        <v-flex d-flex xs12 sm3 md3>
        <v-card class="c" >
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-title class="title">Vehicle Number</v-card-title>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              
              <v-flex xs12>
                <v-card-text class="title">
                 <v-select            
                  :items="vehi_numbers"
                  solo
                  label="Vehicle Number"
                  class="c"
                  flat
                >
                </v-select>
                </v-card-text>
              </v-flex>
            </v-layout>  
          </v-container>
        </v-card>
      </v-flex>
      
      <v-flex d-flex xs12 sm3 md3>
        <v-card class="">
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12>
          <v-card-title class="title ">speed</v-card-title>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs6>
                <v-card-media class="hidden-xs-only">
                  <v-progress-circular
                    :rotate="360"
                    :size="75"
                    :width="15"
                    :value="value"
                    color="speed1"
                  >
                    {{ value }}
                  </v-progress-circular>
                  </v-card-media>
              </v-flex>
              <v-flex xs6>
                <v-card-text class="title">
                  <v-card flat class="rounded-card speed2">
                    <v-card-text class="text-xs-center speed1--text">
                      {{speed}}
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-flex>
            </v-layout>  
          </v-container>
        </v-card>
      </v-flex>

      
         <v-flex d-flex xs12 sm3 md3>
            <v-card>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card-title class="title">Number of passengers</v-card-title>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-card-media >
                      
                      <v-icon class="num_seats1--text" size="80">airline_seat_recline_normal</v-icon> 
                                    
                    </v-card-media>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="">
                      <v-card flat class="rounded-card num_seats2">
                        <v-card-text class="text-xs-center num_seats1--text">
                           <app-odo></app-odo>
                        </v-card-text>
                      </v-card>
                    </v-card-text>
                  </v-flex>
                </v-layout>  
              </v-container>
             </v-card>
            </v-flex>

    <v-flex d-flex xs12 sm3 md3>
            <v-card>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card-title class="title">Number of passengers</v-card-title>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-card-media
                    src="/static/vehicle.png"
                    height="75px"
                    contain
                    class="hidden-xs-only">                 
                    </v-card-media>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="title">
                      <v-card class="rounded-card">
                        <v-card-text class="text-xs-center">
                          {{num_seats}}
                        </v-card-text>
                      </v-card>
                    </v-card-text>
                  </v-flex>
                </v-layout>  
              </v-container>
             </v-card>
            </v-flex>
    </v-layout>

    <v-layout row wrap >
      <v-flex d-flex xs12 sm6 md6>
        <v-card>
          <app-map></app-map>
        </v-card>
      </v-flex>
     
      <v-flex d-flex xs12 sm6 md6>         
        <v-card>
          <app-chartIncome></app-chartIncome>
        </v-card>                      
      </v-flex>     
     </v-layout>

    <v-layout wrap>
      <v-flex d-flex xs12 sm6 md6>
        <v-card >
            <app-chartProfit></app-chartProfit>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6> 
        <v-card>
              <app-chartFuel></app-chartFuel>   
        </v-card>               
       
      </v-flex>     
    </v-layout>
  </v-container>
 </v-container>

</template>

<script>
import Income_chart from '@/components/Management/charts/income_chart'
import Profit_chart from '@/components/Management/charts/profit_chart'
import Fuel_chart from '@/components/Management/charts/fuel_chart'
import Toolbar1 from '@/components/toolbar1'
import Map from '@/components/map'
import Odometer from '@/components/Management/odometer'

 export default {
    data (){ 
      return{
        interval: {},
        value: 0,
        speed: '20km/h',
        num_seats: '8',
    
    vehi_numbers:['BCC-0001','ABC-0000','PA-1234'],
      }
    },
    components:{
      'app-toolbar':Toolbar1,
      'app-chartIncome': Income_chart,
      'app-map' :Map,
      'app-chartProfit': Profit_chart,
      'app-chartFuel': Fuel_chart,
      'app-odo': Odometer,
    },

    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    }
  }
</script>

<style>
.tool_bar{
    height: 75px;
}

.v-progress-circular{
    margin: 1rem;}

.rounded-card{
    border-radius:50px;
}
</style>


