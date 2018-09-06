<template>
    <v-container fluid>
            <!-- <v-layout row>                   
                    <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
                        <div data-aos="fade-down" data-aos-duration="1000">                            
                                <span style="font-size:70px;color:rgba(220,220,220,0.2)">Services</span>                       
                        </div>
                    </v-flex>                 
                </v-layout>  -->
            
            <span style="font-size:4vh">Our Services</span><hr>
            <v-layout row style="height:50px">
                <v-flex xs12 class="text-xs-center">
                    
                </v-flex>
            </v-layout>

            <v-layout row wrap> 
                <v-flex xs12 sm2 class="mt-5 pt-5">
                    <span style="font-size:3vh;color:#1BB0E0">For public users</span>
                </v-flex>       
                 <v-flex xs12 sm3 offset-sm2>
                     <div data-aos="fade-up" data-aos-duration="1000">
                        <v-card class="mt-2 mr-3 grow" flat>
                            <v-card-media
                            src="/static/pas.jpg"
                            height="200px">
                            </v-card-media>
                            <v-card-title>
                                <h3>View number of passengers</h3>
                                By using sonar technology number of passengers is counted. 
                                It will be updated on the web site and as well as in the app when the vehicle is entered to the highway. 
                                So, highway bus owners can login to their account and get a count of passengers on each trip.
                            </v-card-title>
                            <v-card-actions>
                                <v-flex class="text-xs-center">
                                    <v-btn fab small outline color="primary">
                                        <v-icon>keyboard_arrow_down</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-card-actions>
                        </v-card>
                     </div>
                </v-flex>

                <v-flex xs12 sm3 offset-sm1>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <v-card  class="mt-5 mr-3 grow" flat>
                            <v-card-media
                            src="/static/tt.png"
                            height="200px"
                            contain>
                            </v-card-media>
                            <v-card-title>
                                <h3>View Timetable</h3>
                                It is highly valuable when a vehicle is stolen or not returned after renting it. 
                                The user can know where their vehicle is. It’s a big advantage in this industry.
                            </v-card-title>
                            <v-card-actions>
                                <v-flex class="text-xs-center">
                                    <v-btn fab small outline color="primary">
                                        <v-icon>keyboard_arrow_down</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-card-actions>
                        </v-card>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row style="height:50px">
                <v-flex xs12 class="text-xs-center">
                    
                </v-flex>
            </v-layout>
            <v-layout row>

                <v-flex xs12 sm3 class="mt-5 pt-5">
                    <span style="font-size:3vh;color:#1BB0E0">For vehicle owners</span>
                </v-flex> 

                 <v-flex xs12 sm3>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <v-card class="mt-5 mr-3 grow" flat>
                            <v-card-media
                            src="/static/map.png"
                            height="200px">
                            </v-card-media>
                            <v-card-title class="">
                                <h3 style="color:black">Live Track</h3>
                                It is highly valuable when a vehicle is stolen or not returned after renting it. 
                                The user can know where their vehicle is. It’s a big advantage in this industry.
                            </v-card-title>
                            <v-card-actions>
                                <v-flex class="text-xs-center">
                                    <v-btn fab small outline color="primary">
                                        <v-icon>keyboard_arrow_down</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-card-actions>
                        </v-card>
                    </div>
                </v-flex>
            
                <v-flex xs12 sm3>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <v-card class="mt-2 mr-3 grow" flat>
                            <v-card-media
                            src="/static/rep.jpg"
                            height="200px">
                            </v-card-media>
                            <v-card-title>
                                <h3>Get detailed reports</h3>
                                By using sonar technology number of passengers is counted. 
                                It will be updated on the web site and as well as in the app when the vehicle is entered to the highway. 
                                So, highway bus owners can login to their account and get a count of passengers on each trip.
                            </v-card-title>
                            <v-card-actions>
                                <v-flex class="text-xs-center">
                                    <v-btn fab small outline color="primary">
                                        <v-icon>keyboard_arrow_down</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-card-actions>
                        </v-card>
                    </div>
                </v-flex>

                 <v-flex xs12 sm3>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <v-card class="mt-5 mr-3 grow" flat>
                            <v-card-media
                            src="/static/man.png"
                            height="200px"
                            contain>
                            </v-card-media>
                            <v-card-title class="">
                                <h3 style="color:black">Manage vehicle details</h3>
                                It is highly valuable when a vehicle is stolen or not returned after renting it. 
                                The user can know where their vehicle is. It’s a big advantage in this industry.
                            </v-card-title>
                            <v-card-actions>
                                <v-flex class="text-xs-center">
                                    <v-btn fab small outline color="primary">
                                        <v-icon>keyboard_arrow_down</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-card-actions>
                        </v-card>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs12>
                    <span style="font-size:4vh">Mobile Application</span><hr>
                    <v-card flat>
                        <v-card-media src="static/mobi.png" height="70vh" contain>
                        </v-card-media>
                    </v-card>
                </v-flex>
            </v-layout>
    </v-container>
</template>

<style>
    .grow { transition: all .2s ease-in-out; }
    .grow:hover { transform: scale(1.1); }
</style>