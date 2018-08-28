<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                    <v-card>
                        <!-- <div id="map" style="width:400px;height:400px;background:yellow"></div> -->
                        <GmapMap
                            :center="{lat:5.9395959, lng:80.5758132}"
                            :zoom="25"
                            map-type-id="terrain"
                            style="width: 100%; height: 500px"
                            >
                            <GmapMarker ref="myMarker"
                                :position="google && new google.maps.LatLng(5.9395959,80.5758132)" />
                        </GmapMap>

                    </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {gmapApi} from 'vue2-google-maps'
    import axios from "axios" 

    export default {
        data(){
            return{
            latlan:[]
            }
        },
        computed: {
    google: gmapApi
  },

    created(){
        const self=this;
    axios.get(`http://localhost:5555/historyByDate`,{
      params: {
       date:'2018-02-01',
       vehicleNum:'19-0523'
      }
      })
      .then(response => {
        console.log("Received map data "+response.data)
        self.latlan = response.data
              
      })
      .catch(e => {
        self.errors.push(e)
      })
    }

            

  
  
}

    
    
    

    

</script>
