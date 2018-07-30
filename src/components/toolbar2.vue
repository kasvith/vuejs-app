<template>
    <v-toolbar dark id="toolbar_main" flat fixed class="transparent text_trans">
        <v-toolbar-title><router-link to="/" tag="span" style="cursor:pointer">TrackMe</router-link></v-toolbar-title>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat to='/'>Home</v-btn>
            <v-btn flat to=''>About</v-btn>
            <v-btn flat to=''>Services</v-btn>
            <v-btn flat to='/timetable'>Highway bus timetable</v-btn>
            <v-btn flat to=''>Contacts</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>       
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat to='/login'><v-icon left>account_circle</v-icon>Login</v-btn>
                <v-btn flat to='/signup'><v-icon left>account_circle</v-icon>Singup</v-btn>
            </v-toolbar-items> 
        </v-toolbar> 
</template>
