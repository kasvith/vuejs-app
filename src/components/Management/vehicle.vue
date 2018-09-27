<template>
        <v-container fluid>


<!-- toolbar start -->

      <app-toolbar></app-toolbar>
  <!-- toolbar end -->


        <v-container fluid class="ml-4"> 

        <h1 class="text-xs-center mt-5 pt-5">All Vehicles</h1>
        
        <div class="text-xs-right">
        <v-btn fab dark color="secondary"  @click.native="dialog=true" >
            <v-icon dark>add</v-icon>
        </v-btn>
        </div>


<!--dialog-->
        <v-dialog
          v-model="dialog"
          max-width="500"
        >



          <v-card>
            <v-card-title class="headline">Enter Vehicle Details</v-card-title>

            <v-card-text>
              <v-container>
                <form>
                  <v-layout row>
                    <v-flex xs12>
                                <v-text-field
                                    name="d_id"
                                    label="Device ID"
                                    id="d_id"
                                    v-model="vehicle.deviceId"
                                    required>
                                </v-text-field>
                            </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                               <!-- <v-select
                                    :items="item"
                                    label="Select Driver"
                                    v-model="vehicle.vehicleDriver"
                                ></v-select>-->
                                
                                <v-select            
                                  :items="routes"                                 
                                  label="Vehicle Route"                                  
                                  v-model="vehicle.route"                                  
                                >
                                </v-select>
                            </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                                <v-text-field
                                    name="vehi_num"
                                    label="Vehicle number"
                                    id="vehi_num"
                                    v-model="vehicle.vehicleNum"
                                    required>
                                </v-text-field>
                            </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                                <v-text-field
                                    name="vehi_make"
                                    label="Vehicle make"
                                    id="vehi_make"  
                                    v-model="vehicle.vehicleMake"                                  
                                    >
                                </v-text-field>
                            </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                               <!-- <v-select
                                    :items="item"
                                    label="Select Driver"
                                    v-model="vehicle.vehicleDriver"
                                ></v-select>-->
                                
                                <v-select            
                                  :items="items"                                 
                                  label="Vehicle Driver"                                  
                                  v-model="vehicle.vehicleDriver"                                  
                                >
                                </v-select>
                            </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                                <v-text-field
                                    name="vehi_model"
                                    label="Vehicle model"
                                    id="vehi_model"
                                    v-model="vehicle.vehicleModel"                                    
                                    >
                                </v-text-field>
                            </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                                <v-text-field
                                    name="No_of_seats"
                                    label="No_of_seats"
                                    id="No_of_seats"
                                    v-model="vehicle.noOfSeats"
                                    required>
                                </v-text-field>
                            </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                        <v-menu
                            ref="menu"
                            :close-on-content-click="false"
                            v-model="menu1"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <v-text-field
                            slot="activator"
                            v-model="vehicle.licenseDate"
                            label="Licence date"
                            prepend-icon="event"
                            readonly
                            ></v-text-field>
                            <v-date-picker
                           
                            v-model="vehicle.licenseDate"
                            @input="menu1=false"
                            ></v-date-picker>
                        </v-menu>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                        <v-menu
                            ref="menu"
                            :close-on-content-click="false"
                            v-model="menu2"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <v-text-field
                            slot="activator"
                            v-model="vehicle.insuranceDate"
                            label="Insurance date"
                            prepend-icon="event"
                            readonly
                            ></v-text-field>
                            <v-date-picker
                           @input="menu2=false"
                            v-model="vehicle.insuranceDate"
                           
                            ></v-date-picker>
                        </v-menu>
                    </v-flex>
                  </v-layout>

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
                            v-model="vehicle.serviceDate"
                            label="Service date"
                            prepend-icon="event"
                            readonly
                            ></v-text-field>
                            <v-date-picker
                           
                            v-model="vehicle.serviceDate"
                             @input="menu3=false"
                            ></v-date-picker>
                        </v-menu>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <div class="text-xs-center">
                <v-btn
              
                  flat="flat"
                  @click="createVehicle(),dialog = false"
                  class="secondary"
                 >
                    Register Vehicle
                </v-btn>
            </div>

            
        </v-card-actions>
      </v-card>
    </v-dialog>
<!--end-dialog-->

<!--edit dialog starts-->
        <v-dialog
          v-model="Editdialog"
          max-width="290"
          persistent
        >
          <v-card>
                <v-card-title class="headline">Change Driver</v-card-title>
                <v-card-text>
                <v-container>
                    <form>
                    <v-layout row>
                        <v-flex xs12>
                            <v-select            
                                  :items="items"                                 
                                  label="Vehicle Driver"                                  
                                  v-model="user.password"                                  
                                >
                                </v-select>    
                            </v-flex>
                                
                    </v-layout>
                    
                    </form>
                </v-container>
                </v-card-text>
            <v-card-actions>
                <v-layout row wrap>
                    <v-flex xs12 class="text-xs-center">
                    <v-btn             
                    flat="flat"
                    class="secondary"
                    @click.native="updateDriverName(), Editdialog= false"
                    >
                        OK
                    </v-btn>
                  
                    </v-flex>
                </v-layout>       
            </v-card-actions>
      </v-card>
    </v-dialog>

<!--edit dialog ends-->

<!--table-->
        <v-container fluid>
          <v-data-table
            :headers="headers"
            :items="vehicles"         
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.deviceId }}</td>
                <td><v-btn flat @click="details(props.item.vehicleNum)">{{ props.item.vehicleNum }}</v-btn></td>
                 <td>{{ props.item.route }}</td>
                <td>{{ props.item.vehicleMake }}</td>
                <td>{{ props.item.vehicleModel }}</td>
                <td>{{ props.item.vehicleDriver }}<v-icon exact :style="{ cursor: 'pointer'}" @click="updateDriver(props.item.vehicleNum),Editdialog=true">edit</v-icon></td>                                                            
                <td>{{ props.item.noOfSeats }}</td>
                <td>{{ props.item.licenseDate }}</td>
                <td>{{ props.item.insuranceDate }}</td>
                <td>{{ props.item.serviceDate }}</td>
                <td><v-icon exact :style="{ cursor: 'pointer'}" @click="deleteVehicle(props.item.id);deleteIndex(props.item)">delete</v-icon></td>            
            </template>
        </v-data-table>
        </v-container>
    <!--end-table-->
        </v-container>
        </v-container>
</template>

<script>
import Toolbar1 from '@/components/toolbar1'
import axios from "axios";
import db from '@/database.js'

export default {
    data(){
        return{
            vehicles: [],
            items:[],
            routes:[],
        
        vehicle:{

                },
        user:{},

            item: ['Select a driver'],
            date1: null,
            date2: null,
            date3: null,
            menu1: false,
            menu2: false,
            menu3: false,
            dialog: false,
            Editdialog:false,
    
            /*navigation drawer*/
            sideNav :false,
            menuItems:[
                {icon:'drive_eta',title:'Vehicle',link:'/vehicle'},
                {icon:'room',title:'Driver Details',link:'/driver'},
                ],

                reportItems:[
                {icon:'drive_eta',title:'Fuel',link:''},
                {icon:'room',title:'Income',link:''},
                {icon:'room',title:'Profit',link:''},
            ],
            /*end-navigation drawer*/

            /*table data*/
            headers: [
            {
                text: 'Device ID',
                align: 'left',
                sortable: false,
                value: 'device' 
                },
                { text: 'Vehicle number', value: 'vehi_num', sortable:false },
                 { text: 'Vehicle Route', value: 'vehi_make', sortable:false },
                { text: 'Vehicle make', value: 'vehi_make', sortable:false },
                { text: 'Vehicle model', value: 'vehi_model', sortable:false },
                { text: 'Driver', value: 'vehi_model', sortable:false },
                { text: 'No. of seats', value: 'vehi_model', sortable:false },
                { text: 'License date', value: 'license', sortable:false },
                { text: 'Insurance date', value: 'insurance', sortable:false },
                { text: 'Service date', value: 'service', sortable:false },
            ],

          
        }
    },

    
    methods: {
      

      details(n){
      
        this.$session.start
        this.$session.set('vehicleNum', n)
        this.$router.push('/details');
      },

    createVehicle(){
        const self = this;
        self.vehicle.owner=self.$session.get('username')
        console.log(self.vehicle);
        
        let uri='http://173.82.219.12:5555/saveVehicle';
        axios.post(uri,self.vehicle)
          .then(response=>{
            console.log(response)
            if(response.data.response=="success"){   
                
                self.vehicles.push(self.vehicle)
               //self.vehicles.push(object.assign({},self.vehicle));
            }
            if(response.data.response=="error"){
                confirm("Vehicle Exists. Check your vehicle number");
            }
            
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });
        
      },   

      deleteVehicle(n){
            const self = this;
          axios.get(`http://173.82.219.12:5555/delete-vehicle`,{
    params: {
      id:n
    },

    
  })

    .then(response => {
      // JSON responses are automatically parsed.
     
      if(response.data.response=="success"){
          console.log("Vehicle Deleted")  
          
             
      }
      
    })
    .catch(e => {
      this.errors.push(e)
    })
      },

    deleteIndex(index){
      const self = this;     
      const itemIndex = self.vehicles.indexOf(index)
     
      confirm('Are you sure you want to delete this Vehicle?') && self.vehicles.splice(itemIndex, 1)
        
    },

    updateDriver(n){
       const self = this;    
       self.$session.set('vehicle',n);
       console.log(n);
      
    },

    updateDriverName(){
         const self=this;
           self.user.username=self.$session.get('vehicle');
          // console.log(user.username);
           let uri='http://173.82.219.12:5555/updateDriver';
        //axios.post(uri,{user: this.user})
        axios.post(uri, self.user)
          .then(res=>{
            
            if(res.data.response=="success"){   
               //display a message
            }else{
               //error 
            }      
          
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });
    },
},
    created() {
        
         const self = this;
         if(!self.$session.has('username')){
                this.$router.push('/login');
         }
         this.$session.start
        
    axios.get(`http://173.82.219.12:5555/show-vehicles`,{
    params: {
      username:self.$session.get('username')
    }
  })
    .then(response => {
      // JSON responses are automatically parsed.
      self.vehicles = response.data
    
    })
    .catch(e => {
      self.errors.push(e)
    })

    
    axios.get(`http://173.82.219.12:5555/show-driver-names`,{
    params: {
      username:self.$session.get('username')
    }
    })
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
     
      
    })
    .catch(e => {
      self.errors.push(e)
    })

    axios.get(`http://173.82.219.12:5555/show-routes`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.routes = response.data     
      
    })
    .catch(e => {
      self.errors.push(e)
    })
        
    },

    
    components:{
      'app-toolbar':Toolbar1
    },

    
        
}
</script>

<style>

</style>


