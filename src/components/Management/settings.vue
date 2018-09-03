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
                    <v-btn             
                    flat="flat"
                    class="secondary"
                    to="/home"
                    >
                        Cancel
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
                                            box
                                            label="New Password"
                                            type="password"
                                            id="password"
                                            v-model="user2.password"
                                            :rules="passwordRules"
                                            ></v-text-field>
                                        </v-flex>                                  
                                        <v-flex xs6>
                                            <v-text-field 
                                            box
                                            label="Confirm Password"
                                            type="password"
                                            id="confirmPassword"
                                            :rules="[comparePasswords]"
                                            v-model="confirmPassword"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                        <v-btn  color="secondary" @click.native="updatePassword()">OK</v-btn>
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
                                            box
                                            v-model="user1.password"
                                            type="number"
                                            label="new telephone number"
                                            id="tel"
                                            :rules="telephoneRules"
                                            ></v-text-field>
                                        </v-flex>   
                                    </v-layout>
                                    <v-layout>                               
                                        <v-flex xs6>
                                            <v-btn color="secondary" @click.native="updateTel()">Update</v-btn>
                                        </v-flex>
                                    </v-layout>
                                    </form>
                                </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-content expand-icon="edit">
                                <div slot="header">Enter Expenses</div>
                                <v-card>
                                <v-card-text>
                                    <form>
                                    <v-layout>
                                        <v-flex xs6>
                                            <v-text-field
                                            solo
                                            v-model="user3.price"
                                            type="number"
                                            label="Diesel price per litre"
                                            id="diesel_price"                                            
                                            ></v-text-field>
                                        </v-flex> 
                                        <v-flex xs6 >
                                            <v-btn  color="secondary" @click.native="updateDieselPrice()">Update</v-btn>
                                        </v-flex>       
                                    </v-layout>
                                    <v-layout>
                                        <v-flex xs6>
                                            <v-text-field
                                            solo
                                            v-model="user3.driverSalary"
                                            type="number"
                                            label="Driver's Salary"
                                            id="driver_salary"                                            
                                            ></v-text-field>
                                        </v-flex>  
                                        <v-flex xs6>
                                            <v-btn color="secondary" @click.native="updateDriverSalary()">Update</v-btn>
                                        </v-flex>       
                                    </v-layout>
                                    <v-layout>
                                        <v-flex xs6>
                                            <v-text-field
                                            solo
                                            v-model="user3.conductorSalary"
                                            type="number"
                                            label="Conductor's Salary"
                                            id="conductor_salary"                                            
                                            ></v-text-field>
                                        </v-flex>  
                                        <v-flex xs6>
                                            <v-btn color="secondary" @click.native="updateConductorSalary()">Update</v-btn>
                                        </v-flex>       
                                    </v-layout>
                                    <v-layout>
                                                                     
                                        <v-flex xs6>
                                            <v-btn id="btnExpense" color="primary" @click.native="createExpenses()">OK</v-btn>
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
            user:{},
            user1:{},
            user2:{},
            user3:{},
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
             
        }
    },

    computed:{
        comparePasswords(){
            return this.user2.password!==this.confirmPassword ? 'Passwords do not match' :true
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
           self.user2.username=self.$session.get('username');
          // console.log(user.username);
           let uri='http://173.82.219.12:5555/update-password';
        //axios.post(uri,{user: this.user})
        axios.post(uri, self.user2)
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
           self.user1.username=self.$session.get('username');
          // console.log(user.username);
           let uri='http://173.82.219.12:5555/update-tel';
        //axios.post(uri,{user: this.user})
        axios.post(uri, self.user1)
          .then(res=>{
            
            if(res.data.response=="success"){                   
               confirm("updated telephone number successfully")

            }else{
                confirm("cannot update telephone number")
            }      
          
          })
          .catch(error=>{
            console.log(error.response.data.parse)
          });

       },

       createExpenses(){

           const self=this;
           self.user3.username=self.$session.get('username');
          
           let uri='http://localhost:5555/create-expenses';
       
            axios.post(uri, self.user3)
            .then(res=>{
                console.log(res.data);
                if(res.data.response=="success"){                                     
                    confirm("updated expenses successfully")

                }else if(res.data.response=="error"){
                    confirm("You already entered the values, use update buttons instead for updating")
                }
                else{
                    confirm("cannot update expenses")
                }      
            
            })
            .catch(error=>{
                console.log(error.response.data.parse)
            })
       },

       updateDieselPrice(){
           const self=this;
           self.user3.username=self.$session.get('username');
          
           let uri='http://localhost:5555/update-diesel-price';
       
            axios.post(uri, self.user3)
            .then(res=>{
                
                if(res.data.response=="success"){                   
                    confirm("updated fuel price successfully")

                }else{
                    confirm("cannot update fuel price")
                }      
            
            })
            .catch(error=>{
                console.log(error.response.data.parse)
            })
       },

       updateDriverSalary(){
            const self=this;
           self.user3.username=self.$session.get('username');
          
           let uri='http://localhost:5555/update-driver-salary';
       
            axios.post(uri, self.user3)
            .then(res=>{
                
                if(res.data.response=="success"){                   
                    confirm("updated driver's salary successfully")

                }else{
                    confirm("cannot update driver's salary")
                }      
            
            })
            .catch(error=>{
                console.log(error.response.data.parse)
            })
       },

       updateConductorSalary(){
                 const self=this;
           self.user3.username=self.$session.get('username');
          
           let uri='http://localhost:5555/update-conductor-salary';
       
            axios.post(uri, self.user3)
            .then(res=>{
                
                if(res.data.response=="success"){                   
                    confirm("updated conductor's salary successfully")

                }else{
                    confirm("cannot update conductor's salary")
                }      
            
            })
            .catch(error=>{
                console.log(error.response.data.parse)
            })
       },

       checkPassword(){

           const self=this;
           self.user.username=self.$session.get('username');
           //console.log(this.user.username);
           let uri='http://173.82.219.12:5555/check-password';
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

