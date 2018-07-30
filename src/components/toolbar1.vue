<template>

    <v-container fluid>

         <v-toolbar flat app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed  color="blue1" dark>
             <v-toolbar-title style="width:70px" class="hidden-sm-and-down">                 
            </v-toolbar-title>
             
            <!-- <v-toolbar-side-icon @click.stop="sideNav=!sideNav" class=""></v-toolbar-side-icon>                -->
           
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only, mt-5">
             <p> Hi <u>{{this.$session.get("username")}}</u></p>
            </v-toolbar-items> 
            </v-toolbar>
    
    <v-navigation-drawer class="" :mini-variant="miniVariant && !isMobile && !hover"                                    
                                    app 
                                    :temporary="miniVariant && hover" 
                                    v-model="sideNav"
                                    :hide-overlay="!isMobile" 
                                    @mouseover.native="hover=true"
                                    @mouseleave.native="hover=false"
                                    >

        <v-list>
            
             <v-list-tile router-link to='/home' class="b">
                <v-list-tile-action  class="a">
                    <img src="/static/logo.png" width="90px" height="70px">
                </v-list-tile-action>
                <v-list-tile-content><span style="font-size:25px">Track<span class="primary--text">Me</span></span></v-list-tile-content>
             
             </v-list-tile> 
            <v-list-tile>
            
            <v-list-tile color="" router-link to='/home' class="hidden-sm-and-up">
                <v-list-tile-action><v-icon>account_balance</v-icon></v-list-tile-action>
                <v-list-tile-content>Home</v-list-tile-content>
            </v-list-tile>

           
               
            </v-list-tile>
            
            <v-list-tile router-link to='/vehicle'>
                <v-list-tile-action><v-icon color="speed1" class="outlined">drive_eta</v-icon></v-list-tile-action>
                <v-list-tile-content>Vehicle</v-list-tile-content>
            </v-list-tile>

            <v-list-tile router-link to='/driver'>
                <v-list-tile-action><v-icon color="black" class="outlined">room</v-icon></v-list-tile-action>
                <v-list-tile-content>Driver</v-list-tile-content>
            </v-list-tile>
            
            
            <v-list-group >
                <v-list-tile slot="activator">
                    <v-list-tile-action><v-icon color="red">collections_bookmark</v-icon></v-list-tile-action>
                <v-list-tile-content>Reports</v-list-tile-content>
                </v-list-tile>         
                
                <v-list-tile v-for="item in reportItems" :key="item.title" :to="item.link">
                <v-list-tile-action><v-icon>{{item.icon}}</v-icon></v-list-tile-action>
                <v-list-tile-content>{{item.title}}</v-list-tile-content>
                </v-list-tile>                        
            </v-list-group>
            <v-list-tile router-link to='/settings'>
                <v-list-tile-action><v-icon color="grey" class="outlined">settings</v-icon></v-list-tile-action>
                <v-list-tile-content>Settings</v-list-tile-content>
            </v-list-tile>
            <v-list-tile router-link to='/'>
                <v-list-tile-action><v-icon color="num_seats1">account_circle</v-icon></v-list-tile-action>
                <v-list-tile-content><v-btn flat @click="logout">Logout</v-btn></v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer> 

   
       
    </v-container>

</template>

<script>
    export default {
    data: () => ({
    
      sideNav :null,
      miniVariant:true,
      hover:false,

       reportItems:[
        {icon:'drive_eta',title:'Fuel',link:'/fuel'},
        {icon:'attach_money',title:'Income',link:'/income'},
        {icon:'trending_up',title:'Profit',link:'/profit'},
      ]
    
    }),
    computed: {
        isMobile () { return this.$vuetify.breakpoint.width < 1264 },
    },

    methods :{
        logout(){
            this.$session.destroy()
        }
    }
  }
</script>

<style>
.v-icon.outlined {
                  border: 1px solid currentColor;
                  border-radius:50%;
                  height: 56px;
                  width: 56px;
}
.a:hover {
    text-decoration: none;
}
.b:hover {
    background-color: none;
    
}

</style>