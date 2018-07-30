<template>
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
                    label="Vehicle Number"                                  
                                                  
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
                    :value="value"
                    color="speed1"                 
                  >
                    {{ value }}
                  </v-progress-circular>
                  </v-card-media>
              </v-flex>
              <v-flex xs6>               
                  <v-card flat class="rounded-card speed2">
                    <v-card-text class="text-xs-center speed1--text title">
                      {{speed}}
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
                           <app-odo></app-odo>
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


</v-container>
</template>

<script>
import Odometer from '@/components/Management/odometer'
export default {
    data (){ 
      return{
        interval: {},
        value: 0,
        speed: '20',
        trip_num: '2',
    
    vehi_numbers:{},

      }     
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

    },
    components:{
      'app-odo': Odometer,
    },

    created(){
      const self=this;
      axios.get(`http://localhost:5555/show-vehicle-numbers`,{
      params: {
        username:self.$session.get('username')
      }
      })
      .then(response => {
        self.vehi_numbers =Object.entries(response.data)
        //self.vehi_numbers = response.data
              
      })
      .catch(e => {
        self.errors.push(e)
      })
    }

    
  }
</script>

<style>


.v-progress-circular{
    margin: 1rem;}

.rounded-card{
    border-radius:50px;
}
.line {
    display: inline-block;
    overflow-wrap: initial
}
</style>


