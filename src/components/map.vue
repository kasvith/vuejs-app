<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                    <v-card>
                        <!-- <div id="map" style="width:400px;height:400px;background:yellow"></div> -->
                        <GmapMap
  :center="{lat:5.9395959, lng:80.5758132}"
  :zoom="17"
  map-type-id="terrain"
  style="width: 550px; height: 420px"
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
    

    export default {
        computed: {
    google: gmapApi
  }
            

  
  
}

    
    
    

    

</script>
