<template>
<body style="background-color:#F5F5F5">
 <v-container fluid>
  <!-- toolbar start -->

  <app-toolbar></app-toolbar>

  <!-- toolbar end -->

<!--extra small devices-->
<v-container fluid>
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
                  v-model="vehicleNumber"                  
                  flat
                >
                </v-select>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="title">
            Speed:
            </v-card-text>          
            <v-card-text class="title">
              No. of passengeeeers: 
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
 <!--extra small devices-->

<v-container fluid>
<!--md devices-->

    <v-layout row wrap class="hidden-xs-only ml-4">
        <v-flex xs12 sm6 md3>
        <v-card flat tile class="c font--text" height="150px" color="">
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-title class="title primary--text" style="height:50px">Vehicle Number</v-card-title>
              </v-flex>
            </v-layout>
            <v-layout row wrap>             
              <v-flex xs12>
                <v-card-text class="title">
                 <v-select            
                  :items="vehi_numbers"
                  solo
                  label="Vehicle Number"
                  v-model="vehicleNumber"  
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
      
      <v-flex d-flex xs12 sm6 md3>
        <v-card flat tile="" class="font--text" height="150px" color="">
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12>
          <v-card-title class="title primary--text">speed</v-card-title>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs6>
                <v-card-media class="" contain>
                  <v-progress-circular
                    :rotate="360"
                    :size="60"
                    :width="15"
                    :value=vehicle.Speed
                    color="speed1"                 
                  >
                     {{ vehicle.Speed }}
                  </v-progress-circular>
                  </v-card-media>
              </v-flex>
              <v-flex xs6>               
                  <v-card flat class="rounded-card speed2">
                    <v-card-text class="text-xs-center speed1--text title">
                       {{vehicle.Speed}}
                    </v-card-text>
                  </v-card>              
              </v-flex>
            </v-layout>  
          </v-container>
        </v-card>
      </v-flex>
      
      
         <v-flex d-flex xs12 sm6 md3>
            <v-card flat class="font--text" height="150px" color="">
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card-title class="title primary--text" style="height:50px">Number of passengers</v-card-title>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-card-media contain>                      
                      <v-icon class="num_seats1--text" size="60">airline_seat_recline_normal</v-icon>                                    
                    </v-card-media>
                  </v-flex>
                  <v-flex xs6>                    
                      <v-card flat class="rounded-card num_seats2">
                        <v-card-text class="text-xs-center num_seats1--text title" >
                           {{vehicle.Num_Of_Persons}}
                        </v-card-text>
                      </v-card>                  
                  </v-flex>
                </v-layout>  
              </v-container>
             </v-card>
            </v-flex>

     <v-flex d-flex xs12 sm6 md3>
            <v-card flat class="font--text" height="150px" color="">
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card-title class="title primary--text">Trip Number</v-card-title>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-card-media
                    src="/static/vehicle.png"
                    height="60px"
                    contain
                    class=""
                    >                 
                    </v-card-media>
                  </v-flex>
                  <v-flex xs6>
                      <v-card flat class="rounded-card trips2">
                        <v-card-text class="text-xs-center title trips1--text">
                          {{trip_num}}
                        </v-card-text>
                      </v-card>
                  </v-flex>
                </v-layout>  
              </v-container>
             </v-card>
            </v-flex>
    </v-layout>

    <v-layout row wrap class="ml-5">
      <v-flex d-flex xs12 sm12 md6>
        <v-card>
           <!-- <div id="map" style="width:400px;height:400px;background:yellow"></div> -->
            <GmapMap
              :center="{lat:vehicle.Latitude, lng:vehicle.Longitude}"
              :zoom="17"
              map-type-id="roadmap"
              style="width: 550px; height: 420px"
            >


  <GmapMarker ref="myMarker"
    :position="google && new google.maps.LatLng(vehicle.Latitude,vehicle.Longitude)" />
</GmapMap>

        </v-card>
      </v-flex>
     
      <v-flex d-flex xs12 sm12 md6>         
        <v-card class="text-xs-center">
          <app-chartProfit class="mt-5"></app-chartProfit>
        </v-card>                      
      </v-flex>     
     </v-layout>

    <v-layout wrap class="ml-5">
      <v-flex d-flex xs12 sm12 md6>
        <v-card >
            <app-chartIncome></app-chartIncome>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm12 md6> 
        <v-card>
              <app-chartFuel></app-chartFuel>   
        </v-card>               
       
      </v-flex>     
    </v-layout>
  </v-container>
</v-container>
 </v-container>
 </v-container>
</body>
</template>

<script>
import Income_chart from '@/components/Management/charts/income_chart'
import Profit_chart from '@/components/Management/charts/profit_chart'
import Fuel_chart from '@/components/Management/charts/fuel_chart'
import Toolbar1 from '@/components/toolbar1'
import Map from '@/components/map'
import Odometer from '@/components/Management/odometer'
import axios from "axios" 
import Firebase from 'firebase'
import {gmapApi} from 'vue2-google-maps'

let config = {
    apiKey: "AIzaSyDdQjRYLvoefMlvt4MnERvdMDOgQKMHs6A",
    authDomain: "trackapp-1ee1c.firebaseapp.com",
    databaseURL: "https://trackapp-1ee1c.firebaseio.com",
    projectId: "trackapp-1ee1c",
    storageBucket: "trackapp-1ee1c.appspot.com",
    messagingSenderId: "344172659813"
}

let fire = Firebase.initializeApp(config);
let db = fire.database();

 export default {
    computed: {
        google: gmapApi
    },

    name:'fire',
   firebase:{
        vehicle:{
        source:db.ref('59029276955677351421b3ff6bf5ee4c/b977d0488fe60ba27f01392cfc686299'),
        asObject:true
        }
    },

    data (){ 
      return{
        interval: {},
        value: 0,
        speed: '',
        trip_num: '2',
        details:{},
        vehi_numbers:[],
        vehicleNumber:''

      } 

      },     

      watch: {
        vehicleNumber: function () {
              console.log(this.vehicleNumber);
              this.$session.start
              this.$session.set('vehicleNum', this.vehicleNumber)
          }
      },
    
     

    created(){
      const self=this;
      
       if(!self.$session.has('username')){
            this.$router.push('/login');
         }   

      axios.get(`http://173.82.219.12:5555/show-vehicle-numbers`,{
      params: {
        username:self.$session.get('username')
      }
      })
      .then(response => {
        
        self.vehi_numbers = response.data
              
      })
      .catch(e => {
        self.errors.push(e)
      })
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
        this.value += 5
      }, 1000)

    },

    

    
  }
</script>

<style>

.v-progress-circular{
    margin: 1rem;}

.rounded-card{
    border-radius:50px;
}
</style>


