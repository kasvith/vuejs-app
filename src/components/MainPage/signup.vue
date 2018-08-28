<template>
<body style="background-image: url('/static/background.jpg');background-size: cover;height: 100%; overflow: hidden;box-shadow:inset 0 0 0 2000px rgba(0,0,20,0.8);">
<v-container fluid>

<!-- toolbar starts -->
<v-container>
<app-toolbar2></app-toolbar2>
</v-container>
 
 
<!-- toolbar ends -->

<v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <v-card color="transparent white--text" flat>
            <v-card-title class="text-xs-center">
                <h3 class="headline mb-0">Signup</h3>
            </v-card-title>
                <v-card-text>
                    <v-container>
                    <form>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    box
                                    name="name"
                                    label="Name"
                                    id="name"
                                    v-model="owner.userName"
                                    type=""
                                    :rules="nameRules"
                                    required>
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    box
                                    name="email"
                                    label="Email address"
                                    id="email"
                                    v-model="owner.email"
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
                                    name="telephone"
                                    label="Telephone Number"
                                    id="telephone"
                                    v-model="owner.tel"                                  
                                    :rules="telephoneRules"
                                    >
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
                                    v-model="owner.password"
                                    type="password"
                                    :rules="passwordRules"
                                    required>
                                </v-text-field>
                            </v-flex>
                        </v-layout> 
                        <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                    box
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    :rules="[comparePasswords]"
                                    type="password"
                                    v-model="confirmPassword"
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
    </v-flex>
  </v-layout>
</v-container>
</v-container>
</body>
</template>

<script>
import axios from "axios";
import Toolbar2 from '@/components/toolbar2'
export default {
    
    data () {
      return {

        owner:{

        },
        confirmPassword:'',

        valid:false,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            telephone:'',
            telephoneRules: [
                v => v.length == 10 || 'Phone number must be 10 characters'
            ],
            password:'',
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Password must be at least 8 characters'
            ],
               
      }
     
},

computed:{
    comparePasswords(){
        return this.owner.password!==this.confirmPassword ? 'Passwords do not match' :true
    }
},

 components:{
            'app-toolbar2': Toolbar2
         }, 

methods: {
     createOwner(){
        console.log(this.owner);
        let uri='http://173.82.219.12:5555/saveOwner';
        axios.post(uri,this.owner)
           .then(res=>{
            console.log(res)                       
            
              console.log(res.data.response)
              
            if(res.data.response=="success"){   
                this.$session.start
                this.$session.set('username', this.owner.email)               
                this.$router.push('/home');
            }
            if(res.data.response=="fail"){
                confirm("User Exists");
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
    
   


</style>