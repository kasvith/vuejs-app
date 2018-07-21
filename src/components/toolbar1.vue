<template>

    <v-container fluid>
    <v-navigation-drawer temporary clipped="$vuetify.breakpoint.mdAndUp" app v-model="sideNav">
        <v-list>
            <v-list-tile router-link to='/home' class="hidden-sm-and-up">
                <v-list-tile-action><v-icon>account_balance</v-icon></v-list-tile-action>
                <v-list-tile-content>Home</v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
                <v-list-tile-action><v-icon>{{item.icon}}</v-icon></v-list-tile-action>
                <v-list-tile-content>{{item.title}}</v-list-tile-content>
            </v-list-tile>
            
            
            <v-list-group >
                <v-list-tile slot="activator">
                    <v-list-tile-action><v-icon>collections_bookmark</v-icon></v-list-tile-action>
                <v-list-tile-content>Reports</v-list-tile-content>
                </v-list-tile>         
                
                <v-list-tile v-for="item in reportItems" :key="item.title" :to="item.link">
                <v-list-tile-action><v-icon>{{item.icon}}</v-icon></v-list-tile-action>
                <v-list-tile-content>{{item.title}}</v-list-tile-content>
                </v-list-tile>                        
            </v-list-group>

            <v-list-tile router-link to='/'>
                <v-list-tile-action><v-icon>account_circle</v-icon></v-list-tile-action>
                <v-list-tile-content>Logout</v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer> 


        <v-toolbar flat app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed class="white">
    <v-toolbar-side-icon @click.stop="sideNav= !sideNav"></v-toolbar-side-icon>       
    <v-toolbar-title><router-link to="/home" tag="span" style="cursor:pointer">TrackMe</router-link></v-toolbar-title>        
    <v-toolbar-items class="hidden-xs-only">
        <v-btn flat to='/home' class="hidden-xs-only">Home</v-btn>
     </v-toolbar-items>

    </v-toolbar>
    </v-container>

</template>

<script>
    export default {
    data: () => ({
    
      sideNav :false,
      menuItems:[
        {icon:'drive_eta',title:'Vehicle',link:'/vehicle'},
        {icon:'room',title:'Driver Details',link:'/driver'},
      ],

       reportItems:[
        {icon:'drive_eta',title:'Fuel',link:'/fuel'},
        {icon:'attach_money',title:'Income',link:'/income'},
        {icon:'trending_up',title:'Profit',link:'/profit'},
      ]
    
    }),

   

    
  }
</script>

<style>

</style>