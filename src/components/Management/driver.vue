<template>   
    <v-container >

      <!-- toolbar start -->

      <app-toolbar></app-toolbar>
      <!-- toolbar end -->


        <v-container >
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
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">     
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.tel }}</td>
              <td>{{ props.item.nationalId }}</td>
              <td><v-icon exact :style="{ cursor: 'pointer'}" @click="deleteDriver(props.item.id);deleteIndex(props.item)">delete</v-icon></td>              
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
         
         /*  { text: 'ID', value: 'id' }, */
          { text: 'Name', value: 'name' ,sortable:false},
          { text: 'Telephone Number', value: 'nationalId' ,sortable:false},
          { text: 'National ID', value: 'tel',sortable:false },
          { text: 'Delete', value: 'delete',sortable:false },
        ],
      
      createDriver(){
         const self = this;
        self.driver.owner=self.$session.get('username')
        console.log(self.driver);
        let uri='http://173.82.219.12:5555/saveDriver';
        axios.post(uri,self.driver)
          .then(response=>{
            console.log(response)
            if(response.data.response=="success"){               
                self.$router.push('/driver');
                console.log("im in")
                self.posts.push(self.driver)
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
      
    axios.get(`http://173.82.219.12:5555/show-drivers`,{
    params: {
      username:self.$session.get('username')
    }
  })

    .then(response => {
      // JSON responses are automatically parsed.
     
      this.posts = response.data
      
     
    })
    .catch(e => {
      this.errors.push(e)
    })
    },

  methods:{
    
    deleteDriver(n){
      const self = this;
          axios.get(`http://173.82.219.12:5555/delete-driver`,{
    params: {
      id:n
    },

    
  })

    .then(response => {
      // JSON responses are automatically parsed.
     
      if(response.data.response=="success"){
          console.log("Driver Deleted")  
          
             
      }
      
    })
    .catch(e => {
      this.errors.push(e)
    })
    },

    deleteIndex(index){
      const self = this;     
      const itemIndex = self.posts.indexOf(index)
      confirm('Are you sure you want to delete this driver?') && self.posts.splice(itemIndex, 1)
        
    },
  },
    components:{
      'app-toolbar':Toolbar1
    }
}
</script>

<style>

</style>


