<template>
<body>
    <v-toolbar app dark id="navbar" flat fixed style="background-color:transparent">
        <v-toolbar-side-icon class="hidden-md-and-up"  @click.native="sideNav = !sideNav"></v-toolbar-side-icon>
        <v-toolbar-title><router-link to="/" tag="span" style="cursor:pointer">TrackMe</router-link></v-toolbar-title>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat href="#about">About</v-btn>
            <v-btn flat href="#services">Services</v-btn>
            <v-btn flat to='/timetable'>Highway bus timetable</v-btn>
            <v-btn flat href="#contacts">Contacts</v-btn>
        </v-toolbar-items>
        <v-spacer class="hidden-xs-only"></v-spacer>       
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat to='/login'><v-icon left>account_circle</v-icon>Login</v-btn>
                <v-btn flat to='/signup'><v-icon left>account_circle</v-icon>Signup</v-btn>
            </v-toolbar-items> 
        </v-toolbar>

            <v-navigation-drawer app v-model="sideNav">
                <v-list>                                              
                    <v-list-tile router-link to='/timetable'>
                        <v-list-tile-action><v-icon color="grey" class="outlined">settings</v-icon></v-list-tile-action>
                        <v-list-tile-content>timetable</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile router-link to='/login'>
                        <v-list-tile-action><v-icon color="grey" class="outlined">account_circle</v-icon></v-list-tile-action>
                        <v-list-tile-content>Login</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile router-link to='/signup'>
                        <v-list-tile-action><v-icon color="grey" class="outlined">account_circle</v-icon></v-list-tile-action>
                        <v-list-tile-content>Signup</v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>  
</body>
</template>

<script>
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 600) {
    //document.getElementById("navbar").style.backgroundColor = "#151B54";
    document.getElementById("navbar").style.backgroundColor = "#151B54";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}
export default {
    data(){
        return{
            sideNav :false,
        }
    }
}
</script>

<style>


</style>
