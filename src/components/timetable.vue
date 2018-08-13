<template>
<v-container>
    <v-layout row>
    <div>
        <v-btn fab dark class="text-xs-center" color="secondary" to="/">
            <v-icon dark>arrow_back_ios</v-icon>
        </v-btn>  
    </div> 
        <v-flex xs12 class="text-xs-center">
            <h1>Time Table</h1>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <!-- <v-flex xs12 sm6 offset-sm3>
            <v-radio-group v-model="radios" :mandatory="false" column>
                <v-radio label="Date" value="date" class="text-xs-center"></v-radio>
                <v-radio label="Time" value="time"></v-radio>
            </v-radio-group>
        </v-flex> -->
        <v-flex xs12 sm6>
            <v-card>
                
            </v-card>
        </v-flex>
    </v-layout>
    <div class="hidden-xs-only" style="height:50px"></div>
    <v-layout row>
        
        <v-flex xs12 sm3 offset-sm3 class="text-xs-left">
            <v-select
                :items="from"
                name="from"
                label="From"
                id="from"
                v-model="from"
                
                >
            </v-select>
        </v-flex>
        
        <v-flex xs12 sm3 class="text-xs-left">
            <v-select
                :items="to"
                name="to"
                label="To"
                id="to"
                v-model="to"
                
                >
            </v-select>
        </v-flex>
    </v-layout>

    <v-layout row wrap>
                
                    <v-flex xs12 sm3 offset-sm3>
                         <v-menu
                            ref="menu"
                            :close-on-content-click="false"
                            v-model="menu1"
                            :nudge-right="40"                           
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            max-width="290px"
                            min-width="290px"
                        >
                            <v-text-field
                            slot="activator"
                            v-model="time1"
                            label="From"
                            prepend-icon="access_time"
                            readonly
                            ></v-text-field>
                            <v-time-picker
                            v-if="menu1"
                            v-model="time1"
                            format="24hr"
                           @input="menu1=false"

                            ></v-time-picker>
                        </v-menu>
                    </v-flex>
                  

                
                    <v-flex xs12 sm3 class="text-xs-left">
                        <v-menu
                            ref="menu"
                            :close-on-content-click="false"
                            v-model="menu2"
                            :nudge-right="40"                            
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            max-width="290px"
                            min-width="290px"
                        >
                            <v-text-field
                            slot="activator"
                            v-model="time2"
                            label="To"
                            prepend-icon="access_time"
                            readonly
                            ></v-text-field>
                            <v-time-picker
                            v-if="menu2"
                            v-model="time2"
                            format="24hr"
                            @input="menu2=false"
                            ></v-time-picker>
                        </v-menu>
                    </v-flex>
                
            </v-layout>

    <v-layout row>
        <v-flex xs12 class="text-xs-center">
            <v-btn color="primary" @click.native="timeTable()">Search</v-btn>
        </v-flex>
    </v-layout>
    
    <v-layout row wrap>
        <v-flex xs12>
           <v-data-table
            :headers="headers"
            :items="timetable"
            hide-actions
            class="elevation-1"
            > 
                <template slot="items" slot-scope="props">
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.routeNumber}}</td>
                <td>{{ props.item.startingPoint }}</td>
                <td>{{ props.item.destination }}</td>
                <td>{{ props.item.departureTime}}</td>
                <td>{{ props.item.arivalTime}}</td>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>

</v-container>    
</template>

<script>
import axios from "axios";

export default {
    data() {
        return{
            from: ['Matara','Galle'],
            to: ['Kadawatha','Galle'],
            radios: 'date',

            time1:null,
            time2:null,
            menu1:false,
            menu2:false,
            headers: [
                { text: 'ID',value: 'id',sortable: false },
                { text: 'Route Number', value: 'route',sortable: false },
                { text: 'Starting Point', value: 'start',sortable: false },
                { text: 'Destination', value: 'destination',sortable: false },
                { text: 'Departure Time(24Hr)', value: 'departure',sortable: false },
                { text: 'Arrival Time(24Hr)', value: 'arrival',sortable: false },
            ],

           timetable: [],
        }
    },
    methods: {
        timeTable(){
                console.log(this.from)
                console.log(this.to)
                console.log(this.time1)
                console.log(this.time2)

            const self=this;
        axios.get(`http://173.82.219.12:5555/showTimeTableWithTime`,{
        params: {
        
        start:this.from,
        end:this.to,
        from:this.time1,
        to:this.time2
        }
        })
          .then(response=>{
            console.log(response)
            //self.vehicle = response.data  
            self.timetable=response.data     
              
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });  

        }
      
    }
}
</script>

<style>

</style>


