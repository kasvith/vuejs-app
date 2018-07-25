<template>
<v-app>

<!-- toolbar starts -->
<div class="tool_bar">
<v-toolbar id="toolbar_main" flat fixed class="transparent">
        <v-toolbar-title><router-link to="/" tag="span" style="cursor:pointer">TrackMe</router-link></v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat to='/'>Home</v-btn>
            <v-btn flat to=''>About</v-btn>
            <v-btn flat to=''>Services</v-btn>
            <v-btn flat to=''>Highway bus timetable</v-btn>
            <v-btn flat to=''>Contacts</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>       
            <v-toolbar-items class="hidden-xs-only hidden">
                <v-btn flat to='/login'><v-icon left>account_circle</v-icon>Login</v-btn>
                <v-btn flat to='/signup'><v-icon left>account_circle</v-icon>Singup</v-btn>
            </v-toolbar-items> 
</v-toolbar>
</div>
 
<!-- toolbar ends -->

<v-container fill-height>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <v-jumbotron color="" height="100%">
        <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">Signup</h3>
            </v-card-title>
                <v-card-text>
                    <v-container>
                    <form>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    name="name"
                                    label="Name"
                                    id="name"
                                    v-model="owner.userName"
                                    type=""
                                    required>
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    name="email"
                                    label="Email address"
                                    id="email"
                                    v-model="owner.email"
                                    type="email"
                                    required>
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    name="telephone"
                                    label="Telephone Number"
                                    id="telephone"
                                    v-model="owner.tel"                                  
                                    
                                    >
                                </v-text-field>
                            </v-flex>
                        </v-layout> 
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    name="password"
                                    label="Password"
                                    id="password"
                                    v-model="owner.password"
                                    type="password"
                                    required>
                                </v-text-field>
                            </v-flex>
                        </v-layout> 
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    
                                    type="password"
                                    required>
                                </v-text-field>
                            </v-flex>
                        </v-layout>                  
                    </form>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="createOwner(),dialog = false">Signup</v-btn>
                </v-card-actions>
                </v-card>
            </v-jumbotron>
    </v-flex>
  </v-layout>
</v-container>
</v-app>
</template>

<script>
import axios from "axios";
export default {
    
    data () {
      return {

        owner:{

        },        
      }
     
},

methods: {
     createOwner(){
        console.log(this.owner);
        let uri='http://localhost:5555/saveOwner';
        axios.post(uri,this.owner)
           .then(res=>{
            console.log(res)                       
            
              console.log(res.data.response)
            if(res.data.response=="success"){   
                this.$session.start
                this.$session.set('username', this.owner.email)               
                this.$router.push('/home');
            }
          
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });
    },

   
},
}

</script>

<style>
    
.tool_bar{
    height: 75px;
}

</style>