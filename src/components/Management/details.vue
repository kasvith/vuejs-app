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
                                    contain>
                                    </v-card-media>
                                </v-flex>
                                <v-flex sm4>
                                    <v-card-title>
                                        <div>
                                            <p style="font-size:18px">Device Id: <v-chip outline color="primary">{{vehicle.deviceId}}</v-chip></p>
                                            <p style="font-size:18px">Vehicle Number: <v-chip outline color="primary">{{vehicle.vehicleNum}}</v-chip></p>
                                            <p style="font-size:18px">Vehicle Route: <v-chip outline color="primary">{{vehicle.route}}</v-chip></p>
                                            <p style="font-size:18px">Vehicle Make: <v-chip outline color="primary">{{vehicle.vehicleMake}}</v-chip></p>
                                            <p style="font-size:18px">Vehicle Model: <v-chip outline color="primary">{{vehicle.vehicleModel}}</v-chip></p>
                                            <p style="font-size:18px">Driver: <v-chip outline color="primary">{{vehicle.vehicleDriver}}</v-chip></p>
                                            <p style="font-size:18px">Number of seats: <v-chip outline color="primary">{{vehicle.noOfSeats}}</v-chip></p>
                                            <p style="font-size:18px">License Date: <v-chip outline style="color:#311B92" id="chip_license">{{vehicle.licenseDate}}</v-chip></p>
                                            <p style="font-size:18px">Insurance Date: <v-chip outline style="color:#311B92" id="chip_insurance">{{vehicle.insuranceDate}}</v-chip></p>
                                            <p style="font-size:18px">Service Date: <v-chip outline style="color:#311B92" id="chip_service">{{vehicle.serviceDate}}</v-chip></p>                                           
                                        </div>
                                        </v-card-title>
                                        
                                        <v-card-text>
                                            <div row>  
                                                 <div class="large-12 medium-12 small-12 cell">
                                                 <label><v-btn fab dark color="secondary"  @click="onPickFile" >
                                                    <v-icon dark>photo_library</v-icon>
                                                </v-btn>
                                                 <input type="file" id="file" ref="file"  @change="onFilePicked"/>
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
        <v-container>            
        <v-layout row wrap>
            <v-flex xs12>
                    <v-layout row>
                    <v-flex xs12>
                        <v-menu
                            ref="menu"
                            :close-on-content-click="false"
                            v-model="menu3"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <v-text-field
                            slot="activator"
                            v-model="a"
                            label="Service date"
                            prepend-icon="event"
                            readonly
                            ></v-text-field>
                            <v-date-picker
                           
                            v-model="a"
                             @input="menu3=false"
                            ></v-date-picker>
                        </v-menu>
                        <v-btn
                            @click="history(a)"
                        >
                        Submit
                        </v-btn>
                    </v-flex>
                  </v-layout>
                    <v-card>                        
                        <GmapMap
                            :center="{lat:7.8731, lng:80.7718}"
                            :zoom="7"
                            map-type-id="roadmap"
                            style="width: 100%; height: 500px"
                            >                    
                            <GmapMarker
                                :key="index"
                                v-for="(m, index) in latlan"
                                :position="google && new google.maps.LatLng(m.lat,m.lan)"
                                :clickable="true"
                                :draggable="true"
                                @click="center=m.position"
                            />
                        </GmapMap>
                         
                    </v-card>
            </v-flex>
        </v-layout>
        </v-container>
        </v-container>
    </v-app>    
</template>

<script>
//import Map from '@/components/map'
import { gmapApi } from "vue2-google-maps";
import axios from "axios";
export default {
  props: {
    value: {
      type: String
    },
    accept: {
      type: String,
      default: "*"
    }
  },
  data() {
    return {
      image: "",
      vehicle: {},
      value: false,
      file: "",
      latlan: [],
      a: "",
      menu3: false,

    };
  },

  computed: {
    google: gmapApi
  },

  created() {
    const self = this;
    if (!this.$session.has("username")) {
      this.$router.push("/login");
    }

    self.image =
      "http://173.82.219.12:5555/file?vehicleNum=" +
      this.$session.get("vehicleNum");


    axios
      .get(`http://173.82.219.12:5555/getVehicle`, {
        params: {
          vehicleNum: self.$session.get("vehicleNum")
        }
      })
      .then(response => {
        console.log(response);
        self.vehicle = response.data;
      })
      .catch(error => {
        console.log(error.response.data.parse);
      });

    axios
      .get(`http://173.82.219.12:5555/dateWarning`, {
        params: {
          vehicleNum: self.$session.get("vehicleNum")
        }
      })
      .then(response => {
        if (response.data.insuranceWarning < 10) {
         
          document.getElementById("chip_license").style.color = "red";
        }

        if (response.data.serviceWarning < 10) {
          
           document.getElementById("chip_insurance").style.color = "red";
        }

        if (response.data.licenseWarning < 10) {
          
          document.getElementById("chip_service").style.color = "red";
        }
      })
      .catch(error => {
        console.log(error.response.data.parse);
      });
  },

  components: {
    "app-map": Map
  },

  methods: {

    history(n) {
        const self=this;
      console.log(n);
      axios
        .get(`http://173.82.219.12:5555/historyByDate`, {
          params: {
            date: n,
            vehicleNum: self.$session.get("vehicleNum")
          }
        })
        .then(response => {
         
          self.latlan = response.data.history;
          console.log(self.latlan);
            
        })
        .catch(e => {
          self.errors.push(e);
        });
    },

    onPickFile() {
      this.$refs.file.click();

    },
    //to show the image when selected
    onFilePicked(event) {
      const files = event.target.files || event.dataTransfer.files

        if (files && files[0]) {
          let filename = files[0].name

          if (filename && filename.lastIndexOf('.') <= 0) {
              return //return alert('Please add a valid image!')
          }

          const fileReader = new FileReader()
          fileReader.addEventListener('load', () => {
          this.image = fileReader.result;
           this.file = this.$refs.file.files[0];  
          })
          fileReader.readAsDataURL(files[0])

          this.$emit('input', files[0])
        }
    },

    

    submitFile() {
      const self = this;
      let formData = new FormData();

      formData.append("file", this.file);
      formData.append("num", self.$session.get("vehicleNum"));
     // console.log(formData);

      let uri = "http://173.82.219.12:5555/upload";

      axios
        .post(uri, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response);
          if (response.data.response == "success") {
            confirm("upload successful");
          }

          if (response.data.response == "error") {
            confirm("Can't upload the image");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

   

    deleteFile(n) {
      axios
        .get(`http://173.82.219.12:5555/deleteImage`, {
          params: {
            num: n
          }
        })
        .then(response => {
          if (response.data.response == "success") {
            confirm("Image is deleted.");
          }else{
            confirm("Image cannot be deleted");
          }
        })
        .catch(error => {
          confirm(error);
        });
    }
  }
};
</script>

<style scoped>
input[type="file"] {
  position: absolute;
  left: -99999px;
}
</style>


