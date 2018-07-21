<template>

    <v-app>
        <v-toolbar dark id="toolbar_main" flat fixed class="transparent text_trans">
        <v-toolbar-title><router-link to="/" tag="span" style="cursor:pointer">TrackMe</router-link></v-toolbar-title>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat to='/'>Home</v-btn>
            <v-btn flat to=''>About</v-btn>
            <v-btn flat to=''>Services</v-btn>
            <v-btn flat to=''>Highway bus timetable</v-btn>
            <v-btn flat to=''>Contacts</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>       
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat to='/login'><v-icon left>account_circle</v-icon>Login</v-btn>
                <v-btn flat to='/signup'><v-icon left>account_circle</v-icon>Singup</v-btn>
            </v-toolbar-items> 
        </v-toolbar> 
       
        <v-layout row wrap style="height:700px">
            <v-flex xs12 style="height:700px">
                <v-carousel hide-controls hide-delimiters style="height:100%" interval="10000">
                    <v-carousel-item v-for="item in images" :key="item.id" :src="item.imageUrl" transition="fade" reverse-transition="fade">
                        
                        <div class="title">
                            {{item.title}}
                            {{text.title}}
                        </div>
                    </v-carousel-item>
<!--                     <v-carousel-item>
                        <div class="title">
                        <video autoplay muted loop controls src="static/bus_video.mp4" height="100%" width="100%"></video>
                        </div>
                    </v-carousel-item> -->
                </v-carousel>
            </v-flex>
        </v-layout>
       
        <app-about></app-about>
        <app-services></app-services>

        
    </v-app>


</template>

<script>
import About from '@/components/MainPage/about'
import Services from '@/components/MainPage/services'
export default {
    data(){
        return {
            images: [
                { imageUrl:'static/5.jpg' , id:'img_1' , title: 'View details about highway buses'},
                { imageUrl:'static/2.jpg' , id:'img_2' , title: 'Number of passengers'},
                { imageUrl:'static/3.jpg' , id:'img_3' , title: 'bus1'},
                
                
            ],
            text: [
                {title:'Passengers can visit our website and select the destination they want. Then they will receive details about relevant bus such as the available number of seats etc.'}
            ],
            
        }
    },
    components:{
   
    'app-about': About,
    'app-services': Services
  }

    

}
</script>

<style scoped>
    .title{
        position: absolute;
        bottom: 0;
        left:0;
        right: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
        padding-top: 20%;
        padding-left: 60%
    }

    .text_trans{
        text-transform: capitalize;
    }
    
</style>


