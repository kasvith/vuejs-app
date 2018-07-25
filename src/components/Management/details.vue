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
                                   :src="imageUrl"
                                    ref="imageUrl"
                                    height="500px"
                                    @click="onPickFile"
                                    style="cursor: pointer;"
                                    contain>
                                    </v-card-media>
                                </v-flex>
                                <v-flex sm4>
                                    <v-card-title>
                                        <div>
                                            <p style="font-size:18px">Device Id: <v-chip outline color="primary">{{vehicle.deviceId}}</v-chip></p>
                                            <p style="font-size:18px">Vehicle Number: <v-chip outline color="primary">{{vehicle.vehicleNum}}</v-chip></p>
                                            <p style="font-size:18px">Vehicle Make: <v-chip outline color="primary">{{vehicle.vehicleMake}}</v-chip></p>
                                            <p style="font-size:18px">Vehicle Model: <v-chip outline color="primary">{{vehicle.vehicleModel}}</v-chip></p>
                                            <p style="font-size:18px">Driver: <v-chip outline color="primary">{{vehicle.vehicleDriver}}</v-chip></p>
                                            <p style="font-size:18px">Number of seats: <v-chip outline color="primary">{{vehicle.noOfSeats}}</v-chip></p>
                                            <p style="font-size:18px">License Date: <v-chip outline color="primary">{{vehicle.licenseDate}}</v-chip></p>
                                            <p style="font-size:18px">Insurance Date: <v-chip outline color="primary">{{vehicle.insuranceDate}}</v-chip></p>
                                            <p style="font-size:18px">Service Date: <v-chip outline color="primary">{{vehicle.serviceDate}}</v-chip></p>
                                           
                                        </div>
                                        </v-card-title>
                                        
                                        <v-card-text>
                                            <div>                                                    
                                                <v-btn fab dark color="secondary"  @click="onPickFile">
                                                    <v-icon dark>photo_library</v-icon>
                                                </v-btn>
                                                <input
                                                    type="file"
                                                    ref="image"
                                                    name="image"
                                                    :accept="accept"
                                                    @change="onFilePicked"
                                                >
                                            </div>
                                       
                                        </v-card-text>
                                        
                                    
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
import axios from "axios";
export default {
    props: {
            value: {
                type: String
            },
            accept: {
                type: String,
                default: '*'
            },
           
        },
    data(){
        return{
            imageUrl:'',
            
            vehicle:{},
            
            value:false,
            
        
        }
       
    },

    created(){
        const self = this;
         if(!this.$session.has('username')){
            this.$router.push('/login');
        }
       
        
        
       axios.get(`http://localhost:5555/getVehicle`,{
    params: {
      vehicleNum:self.$session.get('vehicleNum')
    }
  })
          .then(response=>{
            console.log(response)
            self.vehicle = response.data       
              
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });           
    },

    components:{
        'app-map':Map,
        
    },


    watch: {
            value(v) {
                this.imageUrl = v
            }
        },

        mounted() {
            this.imageUrl = this.value
        },

        
        methods: {
            
           onPickFile() {
                this.$refs.image.click()
            },

            onFilePicked(event) {
                console.log(event)
                const files = event.target.files || event.dataTransfer.files

                if (files && files[0]) {
                    let filename = files[0].name

                    if (filename && filename.lastIndexOf('.') <= 0) {
                        return //return alert('Please add a valid image!')
                    }

                    const fileReader = new FileReader()
                    fileReader.addEventListener('load', () => {
                        this.imageUrl = fileReader.result
                    })
                    fileReader.readAsDataURL(files[0])

                    this.$emit('input', files[0])
                }
            },
        }
}
</script>

<style scoped>
    input[type=file] {
        position: absolute;
        left: -99999px;
    }
</style>


