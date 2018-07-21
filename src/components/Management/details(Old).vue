<template>
    <v-app>
        <v-container fluid>
        <div>
        <v-btn fab dark color="secondary" to="/Vehicle">
            <v-icon dark>arrow_back_ios</v-icon>
        </v-btn>
        </div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-container fluid>
                            <v-layout row>
                                <v-flex xs12 sm8>
                                    <v-card-media
                                    src="/static/1.jpg"
                                    height="500px"
                                    contain>
                                    </v-card-media>
                                </v-flex>
                                <v-flex sm4>
                                    <v-card-title>
                                        <div>
                                        <h3>Vehicle Number:</h3>{{vehi_num}}<br>
                                        <h3>Vehicle Model:</h3>{{vehi_model}}<br>
                                        <h3>Next license date:</h3>{{license}}<br>
                                        <h3>Next Insurance date:</h3>{{insurance}}<br>
                                        <h3>Next Service date:</h3>{{service}}<br>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <app-map></app-map>
        </v-container>
    </v-app>    
</template>

<script>
import Map from '@/components/map'
export default {
    data(){
        return{
            
            vehi_num:'ABC-0000',
            vehi_model:'abc',
            license:'2012/03/22',
            insurance:'2012/03/20',
            service:'2012/03/10',
            value:false
            
        
        }
    },

    components:{
        'app-map':Map
    }

}
</script>

