<template>   
    <v-container>

      <!-- toolbar start -->

      <app-toolbar></app-toolbar>
      <!-- toolbar end -->


        <v-container>
        <h1 class="text-xs-center">All Drivers</h1>
        
        <div class="text-xs-right">
        <v-btn fab dark color="secondary"  @click.native="dialog=true">
            <v-icon dark>add</v-icon>
        </v-btn>
        </div>

        <v-dialog
          v-model="dialog"
          max-width="290"
        >
          <v-card>
            <v-card-title class="headline">Enter Driver Details</v-card-title>

            <v-card-text>
              <v-container>
                <form>
                  <v-layout row>
                    <v-flex xs12>
                                <v-text-field
                                    name="name"
                                    label="Enter Name"
                                    id="name"
                                    v-model="driver.name"
                                    type=""
                                    required>
                                </v-text-field>
                            </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                                <v-text-field
                                    name="id"
                                    label="Enter national ID"
                                    id="id"
                                    v-model="driver.nationalId"
                                    type=""
                                    required>
                                </v-text-field>
                            </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                                <v-text-field
                                    name="telephone"
                                    label="Enter telephone number"
                                    id="telephone"
                                    v-model="driver.tel"
                                    type=""
                                    required>
                                </v-text-field>
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
                  @click="createDriver(),dialog = false"
                  class="secondary"
                 >
                    Register Driver
                </v-btn>
            </div>

            
        </v-card-actions>
      </v-card>
    </v-dialog>

        <v-container fluid>
         <v-data-table
            :headers="headers"
            :items="posts"
            hide-actions
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>            
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.tel }}</td>
            <td>{{ props.item.nationalId }}</td>
            
            </template>
        </v-data-table>
        </v-container>
        </v-container>
    </v-container>
</template>

<script>
import Toolbar1 from '@/components/toolbar1'
import axios from "axios";
export default {
   data () {
      return {
        posts: [],
        driver:{

        },

        dialog:false,
        headers: [
          {
             text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id' 
          },
         /*  { text: 'ID', value: 'id' }, */
          { text: 'Name', value: 'name' },
          { text: 'National ID', value: 'nationalId' },
          { text: 'Telephone Number', value: 'tel' },
        ],
      /* posts: [
          {
            id:1,
            value: false,
            name: 'Saman',
            nationalId: '781234567v',
            tel: '0771234567',
          },],
          {
            id:5,
            value: false,
            name: 'Kamal',
            nic: '701232367v',
            telephone: '0771233556',
          },
          {
            id:8,
            value: false,
            name: 'Nimal',
            nic: '681234598v',
            telephone: '0711235767',
          },
          {
            id:12,
            value: false,
            name: 'Amal',
            nic: '641234567v',
            telephone: '0721234567',
          },
          {
            id:20,
            value: false,
            name: 'vimal',
            nic: '801234567v',
            telephone: '0761234567',
          },
          
        ],*/
      createDriver(){
         const self = this;
        self.driver.owner=self.$session.get('username')
        console.log(self.driver);
        let uri='http://localhost:5555/saveDriver';
        axios.post(uri,self.driver)
          .then(response=>{
            console.log(response)
            if(response.data.response=="success"){               
                self.$router.push('/driver');
            }
          })
          .catch(error=>{
            console.log(error.parse)
          });
        
      }
        
      }
    } ,

    // Fetches posts when the component is created.
   created() {
      const self = this;
       if(!self.$session.has('username')){
                this.$router.push('/login');
         }
      this.$session.start
      console.log( self.$session.get('username'))
    axios.get(`http://localhost:5555/show-drivers`,{
    params: {
      username:self.$session.get('username')
    }
  })

    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response)
      this.posts = response.data
      console.log(self.$session.get('username'))
     
    })
    .catch(e => {
      this.errors.push(e)
    })
    },

    components:{
      'app-toolbar':Toolbar1
    }
}
</script>

<style>

</style>


