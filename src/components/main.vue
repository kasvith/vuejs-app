<template>

    <body style="background-color:white">
        <app-toolbar2></app-toolbar2>
       
       
            <v-layout row wrap style="height:100vh;width:100vw">
                <v-flex xs12 style="height:100vh;width:100vw">
                    <v-carousel hide-delimiters style="height:100vh;width:100vw" interval="10000">
                        <v-carousel-item v-for="item in images" :key="item.id" :src="item.imageUrl">
                            
                            <!-- <div class="title text-align-center">
                                <span style="color:white;font-size:50px">Track</span>
                                <span style="color:blue;font-size:50px">Me</span><br>
                                <span style="color:white;font-size:25px;font-family:cursive">
                                    {{item.title}}
                                </span>
                            </div> -->
                            <div class="title">
                            <v-layout row wrap>
                                <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
                                <v-card flat class="transparent white--text">
                                    <v-card-title 
                                    style="font-size:50px;border:solid 3px white" 
                                    class="white--text">
                                    <v-container>
                                        <v-layout row>
                                            <v-flex xs12 class="animated">
                                                Track<span style="color:blue">Me</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                    </v-card-title>
                                    <v-card-text 
                                    style="font-size:30px">
                                        {{item.title}}
                                    </v-card-text>
                                </v-card>
                                </v-flex>
                            </v-layout>
                            </div>
                            
                        </v-carousel-item>
                       <!-- <a href="#about" class="js-anchor-link">click</a>-->
    <!--                     <v-carousel-item>
                            <div class="title">
                            <video autoplay muted loop controls src="static/bus_video.mp4" height="100%" width="100%"></video>
                            </div>
                        </v-carousel-item> -->
                    </v-carousel>
                </v-flex>
            </v-layout>                 
       
       
        <v-container fluid>
            <section id="about">
            <app-about></app-about>
            </section>
        </v-container>
        
        <v-container fluid id="services">
            <app-services></app-services>
        </v-container>
        <v-container fluid id="contacts">
            <app-contacts></app-contacts>
        </v-container>  
    </body>

</template>

<script>
import About from '@/components/MainPage/about'
import Services from '@/components/MainPage/services'
import Toolbar2 from '@/components/toolbar2'
import Contacts from '@/components/MainPage/contacts'
export default {
    data(){
        return {
            images: [
                { imageUrl:'static/bus14e5.jpg' , id:'img_1' , title: 'View timetable and number of available seats',subtitle:'Passengers can visit our website and select the destination they want. Then they will receive details about relevant bus such as the available number of seats etc.'},
                { imageUrl:'static/mgt.jpg' , id:'img_2' , title: 'Owners can manage and view their vehicle information',subtitle:''},
                { imageUrl:'static/dev3.jpg' , id:'img_3' , title: 'We provide a web application and a mobile app'},
                
                
            ],
            
        }
    },
    components:{
   
    'app-about': About,
    'app-services': Services,
    'app-toolbar2': Toolbar2,
    'app-contacts':Contacts
  },

};

/* $('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
}); */



</script>

<style scoped>
    .title{
        position: absolute;
        bottom: 0;
        left:0;
        right: 0;
        top: 0;
        /* background-image: url('/static/loop2.jpg'); */
        background-color: rgba(0, 0, 0, 0.4);
        background-size: cover;
        padding-left:0;
        padding-top: 35vh;
    }

.title2{
        position: absolute;
        bottom: 0;
        left:0;
        right: 0;
        top: 0;
        background: linear-gradient(180deg,rgba(0, 0, 0,0),rgba(0, 0, 0,1));
    }

    .text_trans{
        text-transform: capitalize;
    }

    .threed:hover
{
        box-shadow:
                1px 1px #53a7ea,
                1px 1px #53a7ea,
                1px 1px #53a7ea;
        -webkit-transform: translateX(-6px);
        transform: translateX(-6px);
}

@keyframes animation {
  from {
    letter-spacing: 32px;
  }
  to {
    letter-spacing: 0;
  }
}

.animated {
  animation: animation 5s ease;
}

h2 {
  text-transform: uppercase;
  white-space: nowrap;
}
    
</style>


