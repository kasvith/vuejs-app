<template>
    <v-container fluid>
        <app-toolbar></app-toolbar>

        <v-dialog
          v-model="dialog"
          max-width="290"
          persistent
        >
          <v-card>
                <v-card-title class="headline">Enter Password</v-card-title>
                <v-card-text>
                <v-container>
                    <form>
                    <v-layout row>
                        <v-flex xs12>
                                    <v-text-field
                                        name="name"
                                        label="Password"                                       
                                        v-model="user.password"
                                        type="password">
                                    </v-text-field>
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
                    @click.native="checkPassword()"
                    >
                        OK
                    </v-btn>
                    </v-flex>
                </v-layout>       
            </v-card-actions>
      </v-card>
    </v-dialog>
        
        <v-container class="mt-3">
            
            <v-layout row wrap>
                <v-flex sm3 class="hidden-xs-only">
                    <v-card flat>
                        <v-list>
                            <v-list-tile router-link to='#account'>
                                <v-list-tile-content>Account Settings</v-list-tile-content>
                            </v-list-tile>
                            
                        </v-list>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm9>
                    <v-card flat>

                        <v-card-title id="account"><h3>Account Settings</h3></v-card-title>
                       

                    <v-card>
                        <v-expansion-panel>
                            <v-expansion-panel-content expand-icon="edit">
                                <div slot="header">Change Password</div>
                                <v-card>
                                <v-card-text>
                                    <form>
                                    <v-layout row wrap>
                                        <v-flex xs6>
                                            <v-text-field 
                                            solo
                                            label="New Password"
                                            type="password"
                                            id="password"
                                            v-model="user.password"
                                            :rules="passwordRules"
                                            ></v-text-field>
                                        </v-flex>                                  
                                        <v-flex xs6>
                                            <v-text-field 
                                            solo
                                            label="Confirm Password"
                                            type="password"
                                            id="confirmPassword"
                                            :rules="confirmRules"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                        <v-btn  @click.native="updatePassword()">OK</v-btn>
                                        </v-flex>
                                    </v-layout>
                                    </form>
                                </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-content expand-icon="edit">
                                <div slot="header">Change telephone number</div>
                                <v-card>
                                <v-card-text>
                                    <form>
                                    <v-layout>
                                        <v-flex xs6>
                                            <v-text-field
                                            solo
                                            v-model="user.password"
                                            type="number"
                                            label="new telephone number"
                                            id="tel"
                                            :rules="telephoneRules"
                                            ></v-text-field>
                                        </v-flex>                                  
                                        <v-flex xs6>
                                            <v-btn @click.native="updateTel()">OK</v-btn>
                                        </v-flex>
                                    </v-layout>
                                    </form>
                                </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-card>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import Toolbar1 from '@/components/toolbar1'
import axios from "axios"
export default {
    data(){
        return{
            user:{

            },
            alert:false,
            valid:false,   
            dialog:true,        
            
            telephone:'',
            telephoneRules: [
                v => v.length == 10 || 'Phone number must be 10 characters'
            ],

            password:'',
            passwordRules: [
                v => v.length >= 8 || 'Password must be at least 8 characters'
            ],
            confirmPassword:'',
            confirmRules:[
                v => v == this.password || '',
                
            ],  
        }
    },
   components:{
       'app-toolbar':Toolbar1
   },

    created(){
        const self = this;
       if(!self.$session.has('username')){
                this.$router.push('/login');
         }

    },
    

   methods:{
       updatePassword(){
           const self=this;
           self.user.username=self.$session.get('username');
          // console.log(user.username);
           let uri='http://localhost:5555/update-password';
        //axios.post(uri,{user: this.user})
        axios.post(uri, self.user)
          .then(res=>{
            
            if(res.data.response=="success"){   
               confirm("Password updated successfully")
            }else{
                confirm("cannot update password")
            }      
          
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });

       },

       updateTel(){

           const self=this;
           self.user.username=self.$session.get('username');
          // console.log(user.username);
           let uri='http://localhost:5555/update-tel';
        //axios.post(uri,{user: this.user})
        axios.post(uri, self.user)
          .then(res=>{
            
            if(res.data.response=="success"){                   
               confirm("updated telephone number successfully")

            }else{
                confirm("cannot update password")
            }      
          
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });

       },

       checkPassword(){

           const self=this;
           self.user.username=self.$session.get('username');
           //console.log(this.user.username);
           let uri='http://localhost:5555/check-password';
        //axios.post(uri,{user: this.user})
         axios.post(uri, self.user)
          .then(res=>{
            console.log("response is "+res.data.response)
            if(res.data.response=="success"){        
                self.dialog=false;            
               

            }else{
                confirm("incorrect password")
            }      
          
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });

       }


   } 


}
</script>

