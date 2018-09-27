<template>
<body style="background-image: url('/static/background.jpg');background-size: cover;height: 100%; overflow: hidden;box-shadow:inset 0 0 0 2000px rgba(0,0,20,0.8);">
<v-container fluid>

<!-- toolbar starts -->
<v-container>
<app-toolbar2></app-toolbar2>
</v-container>
<!-- toolbar ends -->

<v-container>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card color="transparent white--text" flat data-aos="zoom-in" data-aos-duration="2000">
            <v-card-title >
                <h3 class="headline mb-0">Login</h3>
            </v-card-title>
                <v-card-text>
                    <v-container>
                    <form>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    box
                                    name="uname"
                                    label="Mail"
                                    id="uname"
                                    v-model="user.username"
                                    type="email"
                                    :rules="emailRules"
                                    required>
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    box
                                    name="password"
                                    label="Password"
                                    id="password"
                                    v-model="user.password"
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
                    <v-btn color="blue darken-1" flat @click.native="dialog = false" to="/">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="sendUser(),dialog = false">Login</v-btn>
                </v-card-actions>
                </v-card>
    </v-flex>
  </v-layout>
</v-container>
</v-container>
</body>
</template>

<script>
import axios from "axios";
import Toolbar2 from '@/components/toolbar2';

export default {

    data () {
      return {
          user:{
          },

          valid:false,
            email:'',
            emailRules:[
                v => !!v || 'Email is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
      }
    },

    components:{
    'app-toolbar2': Toolbar2
  },
    
methods: {
    
    sendUser(){
       
       let uri='http://173.82.219.12:5555/login';
        //axios.post(uri,{user: this.user})
        axios.post(uri, this.user)
          .then(res=>{
            
            if(res.data.response=="success"){   
                this.$session.start
                this.$session.set('username', this.user.username)               
                this.$router.push('/home');
            }else if(res.data.response=="fail"){
                confirm("Incorrect username or password")
                
            }else{
                confirm("Sorry Server is out of order ")
            }      
          
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });
        
      }
},
    
}
</script>

<style>




</style>