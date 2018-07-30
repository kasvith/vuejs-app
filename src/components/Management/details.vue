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
                                   :src="image"
                                    ref="imageUrl"
                                    height="500px"                                    
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
                                            <div row>  
                                                 <div class="large-12 medium-12 small-12 cell">
                                                 <label><v-btn fab dark color="secondary"  @click="onPickFile" >
                                                    <v-icon dark>photo_library</v-icon>
                                                </v-btn>
                                                 <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                                                 </label>
                                                 <v-btn class="primary" v-on:click="submitFile()">Submit</v-btn>
                                                 <v-btn class="primary" v-on:click="deleteFile(vehicle.vehicleNum)">Delete</v-btn>
                                                 </div>                                              
                                                                                                
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
            
            image:'',
            vehicle:{},
            
            value:false,
             file: '',
        
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
        
         self.image="http://localhost:5555/file?vehicleNum="+ this.$session.get('vehicleNum')

               
    },

    components:{
        'app-map':Map,
        
    },

    methods:{

        onPickFile() {
                this.$refs.file.click()
                
            },        

        submitFile(){
        /*  
                Initialize the form data
            */
            const self=this
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);
            formData.append('num',self.$session.get('vehicleNum'));
            console.log(formData)
        /*
          Make the request to the POST /single-file URL
        */
            let uri='http://localhost:5555/upload';
           
         axios.post(uri,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              })
          .then(response=>{
              console.log(response)
              if(response.data.response=="success"){
                 //error msg               
                  console.log("Successfully uploaded!!")
                
                  confirm("upload successful")
              }

              if(response.data.response=="error"){
                  confirm("Cant upload the image")
              }
           
          })
          .catch(error=>{
            console.log(error)
          });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },

      deleteFile(n){

          axios.get(`http://localhost:5555/deleteImage`,{
        params: {
            num:n
        }
        })
          .then(response=>{

           if(response.data.response=="success"){
               confirm("Image is deleted.")
           }       
              
          })
          .catch(error=>{
            confirm(error)
          });   

      }

    }
  
}
</script>

<style scoped>
    input[type=file] {
        position: absolute;
        left: -99999px;
    }
</style>


